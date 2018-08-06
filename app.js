const yargs = require('yargs');

const slack = require('./slackWebhook/postSlackMessage');
const PIPeople = require('./PIPeople/getPIPeople');
const guidebook = require('./guidebook/getGuidebook.js');

const argv = yargs
  .options({
    e: {
      demand: true,
      alias: 'email',
      describe: 'email to get people info for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

PIPeople.getPIPerson(argv.email, (errorMessage, results) =>{
  if(errorMessage) {
      console.log(errorMessage);
    } else {
      slack.postSlackMessage(`Please welcome ${results.name} to the team!`, (errorMessage, results) => {
        if(errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(results);
        }
      });
      guidebook.getGuidebook(results.originalId, (errorMessage, results) =>{
        if(errorMessage) {
            console.log(errorMessage);
          } else {
            slack.postSlackMessage(results.textBody, (errorMessage, results) => {
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
