import { gql } from "apollo-server-express";


const token = `
  tokenValue: String
  timeStamp: Date 
`

const walletInputData = `
  walletAddress: ID!
  tokenAddress: ID!
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
    token: TokenInput
  }

  type WalletToken {
    walletAddress: ID!
    tokenAddress:ID!
    token: Token
  }

  type Token {
    ${token}
  }

  input TokenInput {
    ${token}
  }


`