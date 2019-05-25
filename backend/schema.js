// Calendar App Schema
// Required
const graphql = require("graphql");
const graphqlDate = require("graphql-iso-date");

// Get Mongoose Schemas
const Event = require("./models/events");

// graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql;

// graphql-iso-date
const { GraphQLDateTime } = graphqlDate;


// ##############################################################################
// GRAPH QL SCHEMAS
// ##############################################################################

const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
         id: {type: GraphQLID},
         name: {type: GraphQLString},
         author: {type: GraphQLString},
         type: {type: GraphQLString},
         date: {type: GraphQLDateTime},
         createdOn: {type: GraphQLDateTime},
         allDay: {type: GraphQLBoolean},
         details: {type: GraphQLString},
         isRepeating: {type: GraphQLBoolean}
    })
});

// ##############################################################################
// ROOT QUERIES
// ##############################################################################


// Root Query
// args will allow the id to be passed into the query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // FIND ONE EVENT
        event: {
            type: EventType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                return Event.findById(args.id);
            }
        },
        // ALL EVENTS QUERY
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args){
                return Event.find({});
            }
        }
    }
})



// ##############################################################################
// MUTATIONS
// ##############################################################################


// Allows GraphQL to change correct data
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // ADDS A NEW EVENT
        addEvent: {
            type: EventType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                author: {type: new GraphQLNonNull(GraphQLString)},
                type: {type: new GraphQLNonNull(GraphQLString)},
                date: {type: GraphQLDateTime},
                createdOn: {type: GraphQLDateTime},
                allDay: {type: new GraphQLNonNull(GraphQLBoolean)},
                details: {type: new GraphQLNonNull(GraphQLString)},
                isRepeating: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve(parent, args){
                let event = new Event({
                    name: args.name,
                    author: args.author,
                    type: args.type,
                    date: args.date,
                    createdOn: args.createdOn,
                    allDay: args.allDay,
                    details: args.details,
                    isRepeating: args.isRepeating
                });
                return event.save();
            }
        },
    }
})

// Calls the default query
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})