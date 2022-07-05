import TokenSchema from "./tokenInfo";
import WalletSchema from "./walletToken";

export default async (db) => {
  db.model("TokenInfo", TokenSchema);
  db.model("WalletToken", WalletSchema);

  return db;
};
