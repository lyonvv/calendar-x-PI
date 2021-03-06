const request = require('request');



var postSlackMessage = (message, callback) => {

  var headers = {
    'Content-Type': 'application/json'
  }

  var options = {
    url: 'https://hooks.slack.com/services/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',
    method: 'POST',
    headers: headers,
    body: JSON.stringify({'text': message})
  }


  request(options, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback('Message Success');
    } else {
      callback('Unable to post message.');
    }
  });
};

module.exports.postSlackMessage = postSlackMessage;
