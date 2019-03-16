'use strict';

const { getPage, parsePage, saveRatings } = require('./utilities');

module.exports.scrape = async (event) => {

  // Fetch Yelp Page
  getPage(event)
    // Parse Page
    .then(page => parsePage(page))
    // Save Response to DB
    .then(yelpData => saveRatings(yelpData));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
