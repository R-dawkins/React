import * as nativeRepository from '../repository/nativeRepository.js'

export async function getData(req,res){

  const rows = await nativeRepository.getData();
  console.log(rows);
  res.json(rows)
}

export async function postTodo(req,res){
  const {content,isCompleted,isEditing} = req.body
  const params = [content,isCompleted,isEditing]
  const rows = await nativeRepository.postTodo(params);
  res.status(204).send("ok")
}

export async function checkTodo(req,res){
  const {tid,isCompleted} = req.params
  const rows = await nativeRepository.checkTodo(tid,isCompleted);
  res.status(200).send("ok")
}

export async function editTodo(req,res){
  const {tid,isEditing} = req.params
  console.log(isEditing,tid);
  const rows = await nativeRepository.editTodo(tid,isEditing);
  res.status(200).send("ok")
}

export async function editContentTodo(req,res){
  const {tid,isEditing,content} = req.params
  console.log(isEditing,tid,content);
  const rows = await nativeRepository.editContentTodo(tid,isEditing,content);
  res.status(200).send("ok")
}

export async function removeTodo(req,res){
  const {tid} = req.params
  const rows = await nativeRepository.removeTodo(tid);
  res.status(200).send("ok")
}