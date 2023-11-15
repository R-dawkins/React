import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as memberRepository from '../repository/memberRepository.js'

export async function signUp(req,res){
  const {id,name,pass,phone} = req.body
  const hashPass = bcrypt.hashSync(pass,10)
  const params = [id,name,hashPass,phone];
  const result =await memberRepository.signUp(params);
  if(result === 'success') res.status(204).send('success')

}