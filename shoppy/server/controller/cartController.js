import * as cartRepository from '../repository/cartRepository.js'

export async function addCart(req,res){
  const {qty,pid,size,id} = req.body
  const params = [qty,pid,size,id]
  const result = await cartRepository.addCart(params);
  if(result === 'success'){
    res.status(201).send('success')
  }
}

export async function getPageList(req,res){
  const {id,start,size} = req.params
  //page는 보여줄 개수
  console.log(req.params);
  console.log(typeof(start),typeof(size));
  const params = [id,id,start,size]
  const result = await cartRepository.getPageList(params);
  console.log(result);
  res.json(result)
} // limit 사용방법

/* export async function getPageList(req,res){
  const {id,start,end} = req.params
  const params = [id,start,end]
  const result = await cartRepository.getPageList(params);
  res.json(result)
} */ //between and 사용방법

/* export async function getCart(req,res){
  const id = req.params.id
  const result = await cartRepository.getCart(id);
  res.json(result)
} */ //전체아이템 get

export async function removeCartItem(req,res){
  const cid = req.params.cid
  const result = await cartRepository.removeCartItem(cid);
  if(result === 'success'){
    res.status(204).send('success')
  }
}

export async function updateCart(req,res){
  const {cid,qty} = req.params
  const params = [qty,cid]
  console.log(cid,qty);
  const result = await cartRepository.updateCart(params)
  if(result === 'success'){
    res.status(204).send('success')
  }
}

export async function removeCart(req,res){
  const id = req.params.id
  const result = await cartRepository.removeCart(id);
  if(result === 'success'){
    return res.status(200).send('success')
  }
}