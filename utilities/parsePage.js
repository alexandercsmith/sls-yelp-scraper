const cheerio = require('cheerio');

module.exports = page => {
  try {
    const $ = cheerio.load(page);
    const rating = $('.rating-info .i-stars').attr('title');
    const reviewCount = $('.rating-info .review-count').text();
  } catch(error) {
    return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`)
  }
}
