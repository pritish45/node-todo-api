const expect =require('expect');
const rewire=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
})

describe('POST/Todos',()=>{
  it('should create a new Todo',(done)=>{
    var text='Test todo text';

    rewire(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        done(err);
        return;
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    })
  })

  it('should not create todo with with invalid body data',(done)=>{

  });
});
