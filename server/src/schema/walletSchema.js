import { gql } from "apollo-server-express";

const walletInputData = `
  walletAddress: ID!
  tokenAddress:ID!
  token: Token
`

export default gql`

  extend type Query {
    getUserData(walletAddress: ID!): WalletToken
  }

  extend type Mutation {
    saveWalletToken(walletData: WalletTokenInput): WalletToken
  }

  input WalletTokenInput {
    ${walletInputData}
  }

  type WalletToken {
    walletAddress: ID!
    tokenAddress:ID!
    token: Token
  }

  type Token {
    tokenValue: String
    timeStamp: Date
  }


`