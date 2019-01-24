const { getDbConnection } = require("../utils/dbConnection");
const constants = require("../config/constants");
const query = require("../config/queryBody");

exports.viewAllIssues = async (req, res) => {
  let esClient = getDbConnection();
  try {
    let list_issues = await esClient.search({
      index: constants.indexname,
      type: constants.typename,
      body: query.getAllIssuesQuery
    });
    res.send(list_issues);
  } catch (err) {
    console.log(err);
    res.send({ message: "error" });
  }
};

exports.postIssue = async (req, res) => {
    console.log(req.body);
  let esClient = getDbConnection();
  try {
    await esClient.index({
      index: constants.indexname,
      id:req.body['issue_id'],
      type: constants.typename,
      body: req.body
    });
    res.end();
  } catch (err) {
    console.log(err);
  }
};
