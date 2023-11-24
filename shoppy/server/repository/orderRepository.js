import { db } from "../database/db.js";

/* export async function postOrder(params){
    return db
    .execute('insert shoppy_order(id,pid,size,qty,total_price,odate) values(?,?,?,?,?,sysdate())',params)
    .then(result=>'success')
}
 */
export async function postOrder(params){
  params.map((list)=>{
    let {id,pid,size,qty,lprice} = list
    let params = [id,pid,size,qty,lprice]
    db
    .execute('insert shoppy_order(id,pid,size,qty,total_price,odate) values(?,?,?,?,?,sysdate())', params)
    .then();
  });

  return 'success'
}
//리포지토리에서 map 사용하는것 map이 끝나고 return 된다.

//이게 더 효율적인듯