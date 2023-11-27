import { useState } from "react";
import axios from 'axios'
import ImageUpload from "./ImageUpload";
export default function ProductsRegistForm(){
  const [image, setImage] = useState(null);
  const [form,setForm] = useState({name:'',price:'',discription:'',image:image});
  const getImage = (e) => {
    setImage(e);
    console.log(e);
  }
//image 업로드 처리할 때는 handleChange를 쓰지않고 html자체 form을 사용한다.

/*   function handleChange(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value})
    console.log(form);
  } */
  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(e.target);
    // FormData를 이용하여 name, value를 얻어올 수 있음
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:${pair[1]}`);
    }
    //또는 FormData를 직접 객체로 변환할 수도 있음
    const formDataObject = {};
    formData.forEach((value,key)=>{
      formDataObject[key]= value;
    });


    axios.post('http://127.0.0.1:8000/products/regist',formDataObject) //package.json의 proxy주소와 같아야 하며 데이터는 서버의 req.body로 넘어감
    .then(result=>{if(result.status === 204){alert('success')}})

  }
  return(
    <div className="products_regist_form_wrap inner">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">image</label><input id="image" name="image" type="text" placeholder="image" value={image}/>
        {/* <label htmlFor="image">image</label><input id="image" name="image" type="text" placeholder="image" value={form.image} onChange={handleChange}/> */}
        <ImageUpload getImage={getImage}/>
        {/* <label htmlFor="name">name</label><input id="name" name="name" type="text" placeholder="name" value={form.name} onChange={handleChange}/> */}
        {/* <label htmlFor="gender">gender</label><input id="gender" name="gender" type="text" placeholder="gender"/> */}
        {/* <label htmlFor="price">price</label><input id="price" name="price" type="text" placeholder="price" value={form.price} onChange={handleChange}/>
        <label htmlFor="discription">discription</label><input id="discription" name="discription" type="text" placeholder="discription" value={form.discription} onChange={handleChange}/> */}
        <label htmlFor="name">name</label><input id="name" name="name" type="text" placeholder="name"/>
        <label htmlFor="price">price</label><input id="price" name="price" type="text" placeholder="price"/>
        <label htmlFor="discription">discription</label><input id="discription" name="discription" type="text" placeholder="discription"/>
        <button>상품 등록</button>
      </form>
    </div>
  );
}