
export default async (conn) => {
    const collections = [
      "tokeninfo",
      "wallettoken",
    ];
  
    const collectionArray = await conn.db.listCollections().toArray();
  
    collectionArray.map((collection) => {
      const colName = collection.name;
      //check the index in the collection array
      const collectionIndex = collections.indexOf(colName);
      const { models } = conn;
      if (collectionIndex === -1) {
        switch (colName) {
          case "tokeninfo":
            models.TokenInfo.createCollection();
            break;
          case "wallettoken":
            models.WalletToken.createCollection();
            break;
          
        }
      }
    });
  };

  