import React, { useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import LineChart from './LineChart';
import { useCommodityModel } from './models/CommodityModel';

const list: any[] = [
  { name: 'tony', age: 18 },
  { name: 'kelly', age: 29 },
  { name: 'anna', age: 25 },
];

const App = function () {
  const { state, add, minus } = useCommodityModel();

  useEffect(() => {
    list.push({ name: 'monkey', age: 25 });
  }, []);

  return (
    <div className="h-screen w-screen bg-white flex flex-col select-none">
      <div className="text-center text-lg font-bold p-4">Title</div>
      <div className="flex-1 bg-blue-200 px-4 py-2">
        <ul>
          {list.map((person, index) => {
            return (
              <li key={index} className="flex justify-evenly">
                <span>姓名:{person.name}</span>
                <span>年龄:{person.age}</span>
              </li>
            );
          })}
        </ul>
        <div className="p-4 rounded w-40  flex justify-between flex-wrap bg-rose-300">
          <span className="w-full inline-block font-bold mb-2">
            {state.count}
          </span>
          <button
            onClick={add}
            className="px-2 py-1 bg-white transition-all hover:shadow"
          >
            ++
          </button>
          <button
            onClick={minus}
            className="px-2 py-1 bg-white transition-all hover:shadow"
          >
            --
          </button>
        </div>
        <div
          className="border border-red-50 rounded-lg mt-4 overflow-hidden p-2 bg-blue-500"
          style={{ backgroundSize: '' }}
        >
          <LineChart className="h-80"></LineChart>
        </div>

        <Dropdown
          options={[
            { label: '字节跳动', value: 'bytedance' },
            { label: '三维六度', value: 'swjt' },
          ]}
        >
          选择
        </Dropdown>
        <div>其他内容</div>
      </div>
    </div>
  );
};

export default App;
