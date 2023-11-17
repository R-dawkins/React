import {Cookies} from 'react-cookie'

const cookies = new Cookies();
// 객체형태로 만들어둠
// useCookies를 사용하지 않는 방법

export const setCookie = (name,value,option) => {
  return cookies.set(name,value,option)
}

export const getCookie = (name) => {
  return cookies.get(name)
  //쿠키가 필요한 곳 로그인 성공,실패 체크
}

export const removeCookie = (name) => {
  return cookies.remove(name)

}
