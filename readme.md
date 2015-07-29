# zippo [![Build Status](https://travis-ci.org/bendrucker/zippo.svg?branch=master)](https://travis-ci.org/bendrucker/zippo)

> ZIP code validation and parsing


## Install

```
$ npm install --save zippo
```


## Usage

```js
var zip = require('zippo')

zip.parse('94105abc123')
//=> 94105

zip.validate('94105abc123')
//=> false
```

## API

#### `zip.parse(input)` -> `string`

Parses a zip code input by removing non-digit characters and limiting the string to 5 characters.

##### input

*Required*  
Type: `string`

#### `zip.validate(input)` -> `boolean`

Validates whether a zip code is 5 digits.

##### input

*Required*  
Type: `string`

## License

MIT © [Ben Drucker](http://bendrucker.me)
