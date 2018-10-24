'use strict'

const request = require('request')
var URI = "";
class TaskService  {

	 constructor(host,index) {
		URI = host + '/' + index;
	}
		
	static init(host,index){
		return new TaskService(host,index)
	}
	
	insert(title, description, local, cb){
		const options = {
			/*
			json:{
				title: title,
				description: description,
				location: local
			},
			url:	URI,
			header:	"Content-Type: application/json"
			*/
			body:{
				title: title,
				description: description,
				location: local
			},
			url:	URI,
			json: true
		}
		request.post(options,cb);
	}
	
	delete(id, cb){
		const options = {
			url:  URI + "/" + id,
			json: true
		}
		request.delete(options,cb);
	}
	 
	
	getTask(id, cb){
		request.get(URI + "/" + id,cb)
	}
	/*
	findBy(prop, value, cb){
		
	*/
	
	update(task, cb){
		let id = task.id;
		const options = {
			url:  URI + "/" + id,
			body: task,
			json: true
		}
		request.put(options,cb);
	}
	 
}

module.exports = TaskService
