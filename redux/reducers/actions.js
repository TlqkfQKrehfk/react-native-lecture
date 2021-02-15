// ex)
// Like 목록을 제어하는 리듀서
// likes.js

// 앤션 목록을 제어하는 리듀서
// actions.js

// 리듀서
// (현재state, action의 리턴객체) => {
//  switch....case .... action의 타입에 따라서 state를 제어함
//  return 변경할 state
//}
const actions = (state = [], action) =>{
  // action의 type별로 상태(state) 제어
  switch (action.type){
    case 'ADD_ACTION':
      // return 변경할 state
      // 현재 state를 복사하여 변경
      return [
        // state배열의 요소들을 카피
        // state == [{},{}] ...state -> {},{}
        ...state,
        // payload 객체 카피
        {
          ...action.payload
        }
      ]
    default:
      return state
  }
}

export default actions