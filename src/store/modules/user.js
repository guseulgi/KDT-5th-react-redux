// 초기 상태
const initState = {
  userId: '',
  userPW: '',
  isLogin: false,
};

//액션 타입
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

//액션 함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    paylod: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

//리듀서
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.paylod.id,
        userPw: action.paylod.password,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userId: '',
        userPw: '',
        isLogin: false,
      };
    default:
      return state;
  }
}
