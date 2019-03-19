'use strict';

const { getPage, parsePage, saveRatings } = require('./utilities');

module.exports.scrape = async (event) => {
  // Fetch Yelp Page
  getPage(event)
    // Parse Page
    .then(page => parsePage(page))
    // Save Response to DB
    .then(yelpData => saveRatings(yelpData, event))
    // Return Callback
    .then(() => callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Scraped: ${event}`
      }),
    }))
    .catch(error => callback(new Error(`Error Scraping: ${event} - ${JSON.stringify(error)}`)))
};

module.exports.launch_scraper = async () => {
  // List Business'

  // Launch Lambda
};
