'use strict';

const { getPage, parsePage, saveRatings } = require('./utilities');

module.exports.hello = async (event) => {

  // Fetch Yelp Page

  // Parse Page

  // Save Response to DB

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
