import { db } from "../database/db.js";

export async function postOrder(params){
    return db
    .execute('insert shoppy_order(id,pid,size,qty,total_price,odate) values(?,?,?,?,?,sysdate())',params)
    .then(result=>'success')
}

/* export async function postOrder(params){
  return params.map(async (list)=>{
    let {id,pid,size,qty,lprice} = list
    let params = [id,pid,size,qty,lprice]
    const result = await db
      .execute('insert shoppy_order(id,pid,size,qty,total_price,odate) values(?,?,?,?,?,sysdate())', params);
    return 'success';
  })
} */

//비동기 함수로 변환된 것