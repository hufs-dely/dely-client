import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        __typename: "Auth",
        isLoggedIn: Boolean(localStorage.getItem("jwt"))
      }
    },
    resolvers: {
      Mutation: {
        logUserIn: (_, { token }, { cache }) => {
          localStorage.setItem("jwt", token);
          cache.writeData({
            data: {
              auth: {
                __typename: "Auth",
                isLoggedIn: true
              }
            }
          });
          return null;
        },
        logUserOut: (_, __, { cache }) => {
          localStorage.removeItem("jwt");
          cache.writeData({
            data: {
              __typename: "Auth",
              isLoggedIn: false
            }
          });
          return null;
        }
      }
    }
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("jwt") || ""
      }
    });
  },
  uri:
    "http://ec2-13-124-254-140.ap-northeast-2.compute.amazonaws.com:4000/graphql"
});

export default client;
