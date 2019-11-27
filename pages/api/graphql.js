
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
    type Query {
        sayHello: String
    }
`

// resolvers

const resolvers = {
    Query: {
        sayHello: () => {
            return "Hello Shane"
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs, resolvers
})

export const config = {
    api: {
        bodyParser: false,
    }
}

export default apolloServer.createHandler({path: "/api/graphql"})