export default function ProductsRegistForm(){
  return(
    <div className="products_regist_form_wrap inner">
      <form action="/products/regist">
        <input name="file" id="file" type="file" />
        <label htmlFor="name">name</label><input id="name" name="name" type="text" placeholder="name"/>
        <label htmlFor="gender">gender</label><input id="gender" name="gender" type="text" placeholder="gender"/>
        <label htmlFor="price">price</label><input id="price" name="price" type="text" placeholder="price"/>
        <label htmlFor="discription">discription</label><input id="discription" name="discription" type="text" placeholder="discription"/>
        <label htmlFor="size">size</label><input id="size" name="size" type="text" placeholder="size"/>
        <button>상품 등록</button>
      </form>
    </div>
  );
}