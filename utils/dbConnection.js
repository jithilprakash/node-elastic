const elasticsearch = require("elasticsearch");
const constants = require("../config/constants");

let client;

exports.getDbConnection = () => {
  try {
    if (!client) {
      client = new elasticsearch.Client({
        host: constants.host_address,
        requestTimeout: Infinity
      });
    }
    return client;
  } catch (err) {
    console.log(err);
  }
};
