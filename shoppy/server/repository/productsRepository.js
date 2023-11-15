import {db} from '../database/db.js'
export async function getProducts(){
  return db
  .execute('select pid,image from shoppy_products')
  .then(result=>result[0])
}

export async function getProductsDetail(pid){
  return db
  .execute('select pid,name,format(price,0) price,discription,image,pdate from shoppy_products where pid=?',[pid])
  .then(result=>result[0])
}

export async function postProducts(params){
  return db
  .execute('insert shoppy_products(name,price,discription,image,pdate) values(?,?,?,?,curdate())',params)
  .then(result=>'success')
}