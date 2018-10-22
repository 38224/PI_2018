'use strict'


const task = require('./task-service')
const fs = require('fs')

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
	generatedId = body._id
})

setTimeout(function(){ 
const id = generatedId

var taskObj = JSON.parse(fs.readFileSync('task1.json', 'utf8'));//'{"title":"lollll222","description":"bahel222","location":"aliel2222"}';
taskObj.id= id
console.log(JSON.stringify(taskObj))
 

ts.update(taskObj, (err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log("updated test on id "+id+": \n\n" + JSON.stringify(res) +"\n\n" + JSON.stringify(body) + "\n\n\n")
	})
},100)

setTimeout(function(){ 
const id = generatedId
ts.getTask(id,(err,res,body) => {
	if(err){
		return console.error(err)
	}
	console.log("getTask test on id "+id+": \n\n" + JSON.stringify(res) +"\n\n" + JSON.stringify(body) + "\n\n\n")
	})
},200)

 /*
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
*/