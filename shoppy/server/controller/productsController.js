import * as productsRepository from '../repository/productsRepository.js'
export async function getProducts(req,res){
  const rows = await productsRepository.getProducts();
  res.json(rows)
}

export async function getProductsDetail(req,res){
  console.log(req.params);
  const rows = await productsRepository.getProductsDetail(req.params.id);
  console.log(rows);
  res.json(rows)
}

export async function postProducts(req,res){
  console.log(req.body);
  const {name,price,discription,image} = req.body
  const params = [name,price,discription,image]
  const result = await productsRepository.postProducts(params);
  if(result === 'success'){
    res.status(204).send('success')
  }
}