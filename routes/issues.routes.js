const issuesController = require('../controller/issues.controller');


module.exports = app =>{
    app.get("/getIssues",issuesController.viewAllIssues);
    app.post("/postIssue",issuesController.postIssue);
}