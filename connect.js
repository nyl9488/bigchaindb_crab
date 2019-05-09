// import bigchaindb-orm
//import Orm from 'bigchaindb-orm'
var Orm = require("bigchaindb-orm").default;
// connect to BigchainDB
const bdbOrm = new Orm("https://test.bigchaindb.com/api/v1/", {
  app_id: "4a2ca33e",
  app_key: "ad357a0f0c6def05b9f8e9bdf0994f6a"
});
// define(<model name>,<additional information>)
// <model name>: represents the name of model you want to store
// <additional inf.>: any information you want to pass about the model (can be string or object)
// note: cannot be changed once set!
bdbOrm.define("myModel", "https://schema.org/v1/myModel");
// create a public and private key for Alice
const aliceKeypair = new bdbOrm.driver.Ed25519Keypair();

module.exports = {
  bdbOrm,
  aliceKeypair
};
