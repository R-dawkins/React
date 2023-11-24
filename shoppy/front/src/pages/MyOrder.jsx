import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "../util/localStorage";
export default function MyOrder(){
  const userInfo = getUser();
/*   useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/order/${userInfo.id}`)
    .then(result=>console.log(result.data))
  },[]) */
  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>주문고객</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>고객정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>주문상품</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>상품정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>결제방식</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>결제방식 선택정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Button type="button">결제하기</Button>
    </div>
  );
}