#!/usr/bin/node

const request = require('request')

request(process.argv[2], function (error, response) {
	  if (response) {
		      console.log('code:', response.statusCode)
		    }
})

