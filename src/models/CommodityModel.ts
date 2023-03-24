import { useReducer } from 'react';
import createMyModel from '../utils/createModel';

// 纯函数
function reducer(
  val: { count: number },
  action: {
    type: string;
    payload: number;
  }
) {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      val = { ...val, count: val.count + payload };
      break;
    case 'minus':
      val = { ...val, count: val.count - payload };
      break;
    default:
      break;
  }
  return val;
}

// 一个通用的用于返回状态的store hook
function useStore() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return {
    state,
    add: () => {
      dispatch({ type: 'add', payload: 1 });
    },
    minus: () => {
      dispatch({ type: 'minus', payload: 1 });
    },
  };
}

const Model = createMyModel(useStore);
export const useCommodityModel = Model.useContext;
export default Model.Provider;
