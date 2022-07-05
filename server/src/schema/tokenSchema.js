import { gql } from "apollo-server-express";

const tokenData = `
  tokenAddress: ID!
  currentBlockNumber: Int
  chainId: Int!
`;

export default gql`

 extend type Query {
   getTokenInfo(tokenAddress: ID!): TokenInfo
 }

 extend type Mutation {
    saveToken(tokenData: TokenDataInput): TokenInfo
 }

 input TokenDataInput {
    ${tokenData}
 }

  type TokenInfo {
    tokenAddress: ID!
    currentBlockNumber: Int
    chainId: Int!
  }


`;
