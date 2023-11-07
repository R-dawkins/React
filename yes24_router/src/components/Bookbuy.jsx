import BuyButton from "./BuyButton";
import Quantity from "./Quantity";

export default function Bookbuy(){
  return(
    <div className="button_wrap">
                <Quantity/>
          <BuyButton
          color="btn_blue"
          buttonName="카트에 넣기"
          />
          <BuyButton
          color="btn_bluegreen"
          buttonName="바로구매"
          />
          <BuyButton
          color="btn_white"
          buttonName="리스트에 넣기"
          />
    </div>
  );
}