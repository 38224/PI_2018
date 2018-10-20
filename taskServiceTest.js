'use strict'


const task = require('./task-service')

const ts = task.init("http://localhost:9200","tasks/task")
console.log(ts)
var title = "lolllllll"
var description =  "bahellllllllllllllllll"
var local = "aliellll"

/*
ts.insert(title,description,local, (err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log(JSON.stringify(res) +"\n\n" + res)
	
}) 
*/


