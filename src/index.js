import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
/**
 * ReactDOM.render(element, container[, callback])
 * element: 需要渲染在container的元素
 * container: 获取到的HTML容器，在这里是指id为root的容器，也就是public中html的div.id = 'root' 
 * callback: //TODO:这个回调函数会在每次render执行后执行，也就是被渲染和更新时
 */
ReactDOM.render(
    <App />,
  document.getElementById('root'),
  () => {
    console.log(App)
    console.table(ReactDOM)
  }
);
