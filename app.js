const slack = require('./slackWebhook/postSlackMessage');
const PIPeople = require('./PIPeople/getPIPeople')

// slack.postSlackMessage('Hello, world.', (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(results);
//   }
// });

PIPeople.getPIPerson('svalentin@predictiveindex.com', (errorMessage, results) =>{
  if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results);
    }
});


// Stefan's id '4984f333-4616-48b9-b6d6-30e6d13ba99b'
