'use strict';

const { getPage, parsePage, saveRatings, deployScrapers } = require('./utilities');

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
    .catch(error => callback(new Error(`Error Scraping ${event}: ${JSON.stringify(error)}`)))
};

module.exports.launch_scraper = async () => {
  // List Business
  const fakeDatabaseResults = [
    'urban-light-at-lacma-los-angeles',
    'the-museum-of-contemporary-art-los-angeles',
    'the-last-bookstore-los-angeles'
  ];

  // Launch Lambda for each Business
  fakeDatabaseResults.forEach(businessName => {
    deployScrapers(businessName);
  });
};
