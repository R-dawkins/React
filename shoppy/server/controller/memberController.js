import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as memberRepository from '../repository/memberRepository.js'

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
    if(checkPass){
      result.login_result = true;
    }else{
      result.login_result = false;
    }
  }else{
    result.login_result = false;
  }
  res.json(result)
  // 체크 결과에 따라 login_result에 true나 false가 들어간다
}