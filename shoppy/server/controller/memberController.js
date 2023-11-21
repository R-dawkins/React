import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as memberRepository from '../repository/memberRepository.js'

export async function checkId(req,res){
  const id = req.params.id
  console.log(id);
  const result = await memberRepository.checkId(id);
  res.json(result)
}

function createToken(id){
  return jwt.sign(
    {id : id},'704YJJ&3si|?'
  )
}

export async function signUp(req,res){
  const {id,name,pass,phone} = req.body
  const hashPass = bcrypt.hashSync(pass,10)
  const params = [id,name,hashPass,phone];
  const result =await memberRepository.signUp(params);
  if(result === 'success') res.status(204).send('success')

}
//cookie를 res.cookie로 보내면 서버로 cookie가 보내진다
//그러나 브라우저는 port가 다르기 때문에 받을 수 없었던 것
export async function login(req,res){
  //로그인을 진행할 때는 count함수를 쓴다 어떤 DB이든지
  //group by를 추가하거나 any_value를 사용하여 sql 42000 회피
  //result.cnt가 1이라면 id는 맞음
  //그렇다면 password 확인 작업
  //result.cnt가 0이라면 id도 틀림
  const {id,pass} = req.body
  const result = await memberRepository.login(id);
  if(result.cnt === 1){
    //비밀번호 체크
    const checkPass = await bcrypt.compare(pass,result.pass)
    result.login_result = false; // default로 false로 설정해놓고 로그인 성공 했을 때만 true로
    if(checkPass){
      result.login_result = true;
      const token = createToken(id)
      result.token = token;
      // {result:{cnt:1,token:token}} 이런 식으로 받게 됨
      // 접근할 때는 result.data.token
    }else{
      //비밀번호가 
      // result.login_result = false;
    }
  }else{
    //아이디가 틀렸을 때
    // result.login_result = false;
  }
  res.json(result)
  // res.json({result:result,token:'token'})
  // 체크 결과에 따라 login_result에 true나 false가 들어간다
  
  //res.json({result:result,token:token}) result 객체와 token 객체를 별개로 보내는 방법
  //{result:{cnt:1},token:{token}} 이런식으로 받게 됨
  // 접근할 때는 (받은 이름).data.token 으로 받게된다.
  // result는 (받은 이름).data.result
}