const uuid = require('uuid');
const AWS = require('aws-sdk');

const dB = new AWS.DynamoDB.DocumentClient();

module.exports = (yelpData, businessName) => {
  // Create Date for Object
  const date = JSON.stringify(new Date());
  // Save Yelp Data to DB
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName: businessName,
      reviewCount: yelpData.reviewCount,
      rating: yelpData.rating,
      scrapedAt: date
    }
  }

  dB.put(params, error => {
    if (error) {
      console.error(`Error saving to Database: ${JSON.stringify(error)}`);
      return Promise.reject(`Error saving to Database: ${JSON.stringify(error)}`);
    } else {
      return Promise.resolve(params.Item);
    }
  })
}
