const request = require('request');

var getPIPerson = (email, callback) => {
  var headers = {
    'Content-Type': 'application/json',
    'api-key': 'FC8A8417-BD4E-4BC1-B4DB-090E6D628101'
  }

  var options = {
    url: `https://pi.predictiveindex.com/api/v2/companies/dda0ef04-4309-42c3-8acb-2e90e622d390/peopleandjobs?$skip=0&$top=50&$search=${email}&searchfields=peopleAndJobsSearchResult/assessmentUser/email`,
    method: 'GET',
    headers: headers,
    json: true
  }


  request(options, (error, response, body) => {
    if(body.totalSearchResults = 1) {

      callback(undefined, body.peopleAndJobsSearchResult[0].assessmentInformation.behavioralAssessmentInformation.originalId);
    } else {
      callback('Error searching/Too many results');
    }
  });
};


module.exports.getPIPerson = getPIPerson;
