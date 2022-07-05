import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  tokenAddress: { type: String, required: true},
  currentBlockNumber: Number,
  networkId: Number
});

TokenSchema.index({tokenAddress: "text"});

export default TokenSchema;