// 초기 상태
const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 2,
      text: '취업하기',
      done: false,
    },
  ],
  buyList: ['PS5', 'Apple Max'],
  todoListCount: 3,
};

let counts = initState.todoList.length;
initState['nextId'] = counts;

//Action
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//Action 생성 함수 CREATE
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

//Action 완료 함수 DONE
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//reducer
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        nextId: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              done: true,
            };
          } else {
            return e;
          }
        }),
      };
    default:
      return state;
  }
}
