const slack = require('./slackWebhook/postSlackMessage');
const PIPeople = require('./PIPeople/getPIPeople');
const guidebook = require('./guidebook/getGuidebook.js');



PIPeople.getPIPerson('svalentin@predictiveindex.com', (errorMessage, results) =>{
  if(errorMessage) {
      console.log(errorMessage);
    } else {
      guidebook.getGuidebook(results.originalId, (errorMessage, results) =>{
        if(errorMessage) {
            console.log(errorMessage);
          } else {
            slack.postSlackMessage(results.refPatternName, (errorMessage, results) => {
              if(errorMessage) {
                console.log(errorMessage);
              } else {
                console.log(results);
              }
            });
          }
        });
    }
});
