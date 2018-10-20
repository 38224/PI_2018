'use strict'


const task = require('./task-service')

const ts = task.init("http://localhost:9200","tasks/task")
console.log(ts)
var title = "lolllllll"
var description =  "bahellllllllllllllllll"
var local = "aliellll"
var generatedId;

ts.insert(title,description,local, (err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log("insert test: \n\n" + JSON.stringify(res) +"\n\n" + JSON.stringify(body) + "\n\n\n")
	generatedId = body._id;
})
 
//http://localhost:9200/tasks/task/XXXXXXXXXXXX
setTimeout(function(){ 
const id = generatedId;
console.log(id + "   " + generatedId)
ts.delete(id, (err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log("delete test on id "+id+": \n\n" + JSON.stringify(res) +"\n\n" + JSON.stringify(body) + "\n\n\n")
	})
},100)