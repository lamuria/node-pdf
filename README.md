# node-pdf

This project converts an html page to pdf and uploads the result file to S3.
To start the server you should use the following command:

`S3_KEY=YOUR_KEY S3_SECRET=YOUR_SECRET S3_BUCKET=YOUR_BUCKET S3_REGION=YOUR_BUCKET node .`

### Usage
`curl -i -X POST localhost:8080/generate/pdf --data '{"url": "https://en.wikipedia.org/wiki/Scottish_National_Antarctic_Expedition", "filename": "wiki"}' -H 'content-type: application/json'`

Returns

`{url: URL_TO_PDF}`
