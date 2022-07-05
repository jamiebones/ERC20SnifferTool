import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    tokenValue: String,
    timeStamp: String,
  });

const WalletSchema = new Schema({
  walletAddress: { type: String, required: true},
  tokenAddress: String,
  token: [ TokenSchema ]
});



WalletSchema.index({tokenAddress: "text", tokenAddress: "text"});

export default WalletSchema;