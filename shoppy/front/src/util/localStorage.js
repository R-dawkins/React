import {getCookie,removeCookie} from './cookie.js'

export const getUser = () => {
  let userInfo = localStorage.getItem('userInfo') && getCookie('x-auth-jwt') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  // 로컬 스토리지에서 getItem으로 가져온 userInfo 와 getCookie로 가져온 x-auth-jwt가 둘 다 true이면 로컬 스토리지에 있는 userInfo를 반환함
  // 로그인 하지 않았다면 null을 반환
  return userInfo;
}

export const removeUser = () => {
  removeCookie('x-auth-jwt')
  localStorage.clear(); // localStorage 안 모두 지우기
  // localStorage.removeItem('userInfo') userInfo만 지우기
}