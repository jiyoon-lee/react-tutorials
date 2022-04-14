import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션: 상태에 어떠한 변화가 필요하면 액션 발생
// 액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0
}

// 리듀서: 변화를 일으키는 함수. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달 받은 액션 객체를 파라미터로 받아온다.
// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

// 스토어: 리덕스를 사용하기 위해 스토어 생성
// 스토어 생성
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }
  counter.innerHTML = state.counter
}

// 구독: 스토어의 내장 함수 중 하나로 액션이 디스패치되어 상태가 업데이트 될 때마다 호출
store.subscribe(render);

// 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch())
}
btnIncrease.onclick = () => {
  store.dispatch(increase(1))
}
btnDecrease.onClick = () => {
  store.dispatch(decrease())
}

