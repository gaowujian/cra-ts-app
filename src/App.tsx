import React from 'react';
import './App.css';
import LineChart from './LineChart';

const list = [
  { name: 'tony', age: 18 },
  { name: 'kelly', age: 29 },
  { name: 'anna', age: 25 },
];

const App: React.FC = function () {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
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
        <div
          className="border border-red-50 rounded-lg mt-4 overflow-hidden p-2 bg-blue-500"
          style={{ backgroundSize: '' }}
        >
          <LineChart className="h-80"></LineChart>
        </div>
      </div>
    </div>
  );
};

export default App;
