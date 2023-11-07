export default function BuyButton(props){
  return(
    <button className={props.color + ' ' + 'btns'}>{props.buttonName}</button>
  );
}