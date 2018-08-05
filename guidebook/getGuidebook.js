const request = require('request');

var getGuidebook  = (assessmentId, callback) => {
  var headers = {
    'Content-Type': 'application/json',
    'api-key': 'FC8A8417-BD4E-4BC1-B4DB-090E6D628101'
  }

  var options = {
    url: `https://pi.predictiveindex.com/api/v2/companies/dda0ef04-4309-42c3-8acb-2e90e622d390/behavioralassessments/${assessmentId}/guidebook`,
    method: 'GET',
    headers: headers,
    json: true
  }


  request(options, (error, response, body) => {
    if(!error) {

      callback(undefined, {
        refPatternName: body.referencePattern.name,
        rePatternDescription: body.referencePattern.description,
        traits: body.referencePattern.traits,
        challenges: body.referencePattern.challenges


      });
    } else {
      callback('Error searching/Too many results');
    }
  });
};


module.exports.getGuidebook = getGuidebook;
