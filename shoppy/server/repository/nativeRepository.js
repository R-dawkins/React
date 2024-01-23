import { db } from "../database/db.js";

export async function getData(){
  return db
  .execute("select tid, content, isCompleted, isEditing from shoppy_todo")
  .then(result=>result[0])
}

export async function postTodo(params){
  console.log(params);
  return db
  .execute("insert into shoppy_todo(content, isCompleted, isEditing) values(?, ?, ?)",params)
  .then(result=>"ok")
}

export async function checkTodo(tid,isCompleted){
  if(isCompleted === "0"){
    return db
    .execute("update shoppy_todo set isCompleted = 1 where tid = ?",[tid])
    .then(result=>"ok")
  }else if(isCompleted === "1"){
    return db
    .execute("update shoppy_todo set isCompleted = 0 where tid = ?",[tid])
    .then(result=>"ok")
  }else{
    return "error"
  }
}

export async function editTodo(tid,isEditing){
  if(isEditing === "0"){
    return db
    .execute("update shoppy_todo set isEditing = 1 where tid = ?",[tid])
    .then(result=>"ok")
  }else{
    return "error"
  }
}
export async function editContentTodo(tid,isEditing,content){
  console.log(content);
  if(isEditing === "1"){
    return db
    .execute("update shoppy_todo set isEditing = 0,content = ? where tid = ?",[content,tid])
    .then(result=>"ok")
  }else{
    return "error"
  }
}

export async function removeTodo(tid){
  return db
  .execute("delete from shoppy_todo where tid = ?",[tid])
  .then(result=>"ok")
}