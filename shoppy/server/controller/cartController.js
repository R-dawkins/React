import * as cartRepository from '../repository/cartRepository.js'

export async function addCart(req,res){
  const {qty,pid,size,id} = req.body
  const params = [qty,pid,size,id]
  const result = await cartRepository.addCart(params);
  if(result === 'success'){
    res.status(201).send('success')
  }
}
export async function getCart(req,res){
  const id = req.params.id
  const result = await cartRepository.getCart(id);
  res.json(result)
}
export async function removeCart(req,res){
  const cid = req.params.cid
  const result = await cartRepository.removeCart(cid);
  if(result === 'success'){
    res.status(204).send('success')
  }
}