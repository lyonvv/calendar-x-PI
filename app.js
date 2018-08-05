const slack = require('./slackWebhook/postSlackMessage');

slack.postSlackMessage('Hello, world.', (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results);
  }
});
