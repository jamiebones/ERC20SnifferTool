import models from "../models";
import mongoose from "mongoose";
import config from "../config";


export const fastConnection = async () => {
  const { DB_DATABASE, DB_HOST, DB_PORT } = config.config;

  let url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  console.log("the url:", url);

  try {
    const conn = await runConnection(url);
    return models(conn);
  } catch (error) {
      console.log("database connection error is", error)
      const conn = await runConnection(url);
      return models(conn);
  }
};

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
