import * as orderRepository from '../repository/orderRepository.js'

export async function postOrder(req,res){
  const params = req.body
  // params.map(async (list)=>{
    // const {id,pid,size,qty,lprice} = list
    //req.body(params)에는 5개보다 더 많은 데이터가 존재하기때문에 list에서 데이터 분리
    // const item = [id,pid,size,qty,lprice]
    const result = await orderRepository.postOrder(params)
    console.log(result);
    if(result === 'success'){
      res.status(204).send('success')
    }
  // })
}