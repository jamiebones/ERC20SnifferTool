import { gql } from "apollo-server-express";
import tokenSchema from "./tokenSchema";
import walletSchema from "./walletSchema";

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  tokenSchema,
  walletSchema
];