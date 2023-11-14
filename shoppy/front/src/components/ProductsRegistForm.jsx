import { useState } from "react";
import axios from 'axios'
export default function ProductsRegistForm(){
  const [form,setForm] = useState({name:'',price:'',discription:'',image:''});
  function handleChange(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value})
    console.log(form);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    axios.post('http://127.0.0.1:8000/products/regist',form) //package.json의 proxy주소와 같아야 하며 데이터는 서버의 req.body로 넘어감
  }
  return(
    <div className="products_regist_form_wrap inner">
      <form onSubmit={handleSubmit}>
        {/* <input name="file" id="file" type="file" /> */}
        <label htmlFor="name">name</label><input id="name" name="name" type="text" placeholder="name" value={form.name} onChange={handleChange}/>
        {/* <label htmlFor="gender">gender</label><input id="gender" name="gender" type="text" placeholder="gender"/> */}
        <label htmlFor="price">price</label><input id="price" name="price" type="text" placeholder="price" value={form.price} onChange={handleChange}/>
        <label htmlFor="discription">discription</label><input id="discription" name="discription" type="text" placeholder="discription" value={form.discription} onChange={handleChange}/>
        <label htmlFor="image">image</label><input id="image" name="image" type="text" placeholder="image" value={form.image} onChange={handleChange}/>
        <button>상품 등록</button>
      </form>
    </div>
  );
}