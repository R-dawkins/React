import ProductsDetail from "../components/ProductsDetail";

export default function ProductsContents(){
  return(
    <div className="products_contents_section">
      <div className="products_contents_wrap inner">
        <p>여성</p>
        <ProductsDetail/>
      </div>
    </div>
  );
}