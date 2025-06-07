#!/usr/bin/node

const request = require('request')

request(process.argv[2], function (error, response, body) {
	  if (!error) {
		      const tasks = JSON.parse(body)
		      const result = {}

		      for (const task of tasks) {
			            if (task.completed) {
					            if (result[task.userId]) {
							              result[task.userId]++
							            } else {
									              result[task.userId] = 1
									            }
					          }
			          }

		      console.log(result)
		    }
})

