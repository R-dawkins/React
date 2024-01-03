import { useDispatch, useSelector } from "react-redux";
import CountItemRedux from "../components/CountItemRedux";
import CountTotal from "../components/CountTotal";

/* 컴포넌트 이벤트 호출과 스토어 중개 역할 */
export default function CountContainer(){
  //1. useSelector 사용하여 total, count 값 가져오기
  const {count, total} = useSelector(state => ({
    count : state.reduxCount.count,
    total : state.reduxCount.total
    //rootReducer안의 reduxCount의 count,total을 받아온다
  }))
  
  //2. dispatch 이용하여 액션 이벤트 함수 처리
  const dispatch = useDispatch();
  const onIncrement = () => dispatch({type:'increment'}); //reducer의 action 객체 호출
  const onDecrement = () => dispatch({type:'decrement'});
  const onReset = () => dispatch({type:'reset'});
  
  //3. 위의 값(total,count)을 공유하려는 컴포넌트 추가
  return(
    <> 
      <CountItemRedux
      count={count}
      total={total}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onReset={onReset}
      />
      <hr />
      <CountTotal total={total}/>
    </>
  );
}