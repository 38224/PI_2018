const expect = require('chai').expect
const assert = require('chai').assert
const TaskService = require('./lab3/lib/task-service.js')
const fs = require('fs')

describe('TaskService', () => {
    let uri = 'http://localhost:9200'
    let index = 'tasks/task'
    let taskservice = TaskService.init(uri, index)


    it('Should return a new instance of a TaskService', () => {
        assert(taskservice!=null) 
    })

    it('Should insert get and delete the inserted task', done => {
        let title = "lolllllll"
        let description =  "bahellllllllllllllllll"
        let local = "aliellll"
        let generatedId;
        taskservice.insert(title, description, local, (err,res,body) => {
            if(err){
                return console.error(err)
            }
            generatedId = body._id

            taskservice.getTask(generatedId, (err, res, body) => {
                expect(body)
                .to.be.an('object')
                .and.have.a.property('local', 'aliellll')
           
                taskservice.delete(body._id, (err, resp, body) => {
                    if(err){
                        return console.error(err)
                    }
                    expect(body)
                    .to.be.null 
                
                })
             })
        })
        done()
    })

    it('Should  update atask' ,done => {
        var taskObj = JSON.parse(fs.readFileSync('task1.json', 'utf8'));//'{"title":"lollll222","description":"bahel222","location":"aliel2222"}';
        taskObj.location = 'HAWAII'
        taskservice.update(taskObj, (err, res, body) => {
            if(err){
                return console.error(err)
            }
            expect(body)
            .to.be.an('object')
            .and.have.a.property('location', 'HAWAII')
            
        })
        done()
    })

})