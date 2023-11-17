import ProductsRegistForm from "../components/ProductsRegistForm";
import { getUser } from "../util/localStorage";
export default function ProductsRegist(){
  const userInfo = getUser();
  return(
    <>
      {userInfo ? <div className="products_regist_section">
        <ProductsRegistForm/>
      </div>: <div>잘못된 접근입니다.</div> }
    </>
  );
}