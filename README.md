# Diamond bears
[![Build Status](https://travis-ci.org/austinhinderer/diamondbears.svg?branch=master)](https://travis-ci.org/austinhinderer/diamondbears)

## Usage
1. Clone the package
2. Create a file called awsaccess.json in a folder named private.
3. Update awsaccess.json with your S3 credentials. If you don't have them, then just use this example object:
```
{
  "key": "AKIAI3Z7CUAFHG53DMJA",
  "secret": "acYxWRu5RRa6CwzQuhdXEfTpbQA+1XQJ7Z1bGTCx",
  "bucket": "dev.example.com",
  "region": "eu-west-1"
}
```
4. Build assets by running `gulp`
5. Upload assets to S3 by running `gulp upload`
