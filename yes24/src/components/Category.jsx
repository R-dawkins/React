export default function Category() {
  const list =['종합','실시간','일별','월별/주별','특가','스테디셀러']
  const menuHandler = (event)=>{
    alert('menu')
    // list.map(menu=>{alert(menu)})
  };
  return (
    <>
    {
      list.map(menu=>
        <div className="category" onClick={menuHandler}>{menu}</div>
      )
    }
    </>
    
  );
}


//()={}
//function () {}