import React from 'react';
// 手写一个createModel
// 1. 创建一个context
// 2. 魔改context的provider并暴露
// 3. 创建一个useContext(ctx)的简易函数

const createMyModel = function <T = any>(
  useHook: (val: (initialState: any) => T) => T
) {
  const ctx = React.createContext<T>(null as T);

  const Provider = function (options: {
    initialState?: any;
    children: React.ReactNode;
  }) {
    const val = useHook(options.initialState);
    return <ctx.Provider value={val}>{options.children}</ctx.Provider>;
  };

  const useContext = () => {
    const val = React.useContext(ctx);
    return val;
  };
  return {
    Provider,
    useContext,
  };
};

export default createMyModel;
