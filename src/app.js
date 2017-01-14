/* 入口启动文件 */
import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from 'COMPONENT/Mailbox';

require('ASSET/scss/app.scss');
// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const MOUNT_NODE = document.getElementById('app');
const emails = require('./data/emails.json');
ReactDOM.render(
  <Mailbox emails={emails}/>,
  MOUNT_NODE
);

