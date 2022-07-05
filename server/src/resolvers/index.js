import tokenResolvers from "./tokenResolvers";
import walletResolvers from "./walletResolvers";
import { GraphQLDateTime } from "graphql-iso-date";


const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  tokenResolvers,
  walletResolvers
];