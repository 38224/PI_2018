'use strict'


const task = require('./task-service')

const ts = task.init("http://localhost:9200","tasks/task")
console.log(ts)
var title = "lololol"
var description =  "bah"
var local = "ali"
ts.insert(title,description,local, (err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log(JSON.stringify(res) +"\n\n" + JSON.stringify(res))
	
}) 

