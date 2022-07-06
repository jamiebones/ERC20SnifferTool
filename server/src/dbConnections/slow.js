import models from "../models";
import mongoose from "mongoose";
import config from "../config";

export const slowConnection =  async () => {
  const {
    DB_PORT,
    DB_HOST,
    DB_DATABASE
  } = config.config;

  //url = `let url = `mongodb://127.0.0.1:27017/${DB_DATABASE}``;

  let url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

  try {
    const conn = await runConnection(url);
    return models(conn);
  } catch (error) {
    console.log("database connection error is", error)
      const conn = await runConnection(url);
      return models(conn);
    }
    
  }


const runConnection = async function (url) {
  const conn = await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
    keepAlive: true,
    poolSize: 10,
  });
  return conn;
};