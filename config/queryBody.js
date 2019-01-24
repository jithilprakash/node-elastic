exports.getAllIssuesQuery = {
    "query": {
      "match_all": {}
    }
  }


//   POST issues_record/doc
//   {
//     "mappings": {
//       "properties": {
//         "issue_id":{
//           "type": "text"
//         },
//         "found_on":{
//           "type": "date"
//         },
//         "description":{
//           "type": "text"
//         },
//         "url":{
//           "type": "text"
//         },
//         "error_code":{
//           "type": "keyword"
//         },
//         "raised_by":{
//           "type": "text"
//         },
//         "solution":{
//           "type": "text"
//         },
//         "resolved_date":{
//           "type": "date"
//         }
//       }
//     }
//   }