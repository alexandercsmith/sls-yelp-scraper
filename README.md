# Serverless Yelp Scraper

## Development
```bash
$ sls invoke local -f scrape -d "yelp-slug"
```

## Deployment
```bash
$ sls 
```

## Build Log
```bash
$ mkdir sls-yelp-scraper

$ cd sls-yelp-scraper

$ sls create -t aws-nodejs

$ npm init -y

$ git init

$ npm install --save cheerio uuid aws-sdk request request-promise

$ mkdir utilities

$ touch utilities/index.js

$ touch utilities/getPage.js

$ touch utilities/parsePage.js

$ touch utilities/saveRatings.js
```
