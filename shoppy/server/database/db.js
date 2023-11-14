import mysql from 'mysql2';

const pool = mysql.createPool({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'1234',
  database:'hrdb2019'
})

export const db = pool.promise();