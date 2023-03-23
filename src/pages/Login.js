/*
 * @Date: 2023-03-17 22:15:32
 * @LastEditTime: 2023-03-22 19:44:56
 */

import { Button, Input, message } from "antd"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "../axios";
import './Login.css'



export default function Login() {
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  function info(message) {
    messageApi.info(message)
  }
  function loginHandler() {
    axios({
      url: "/user/login",
      method: "post",
      data: {
        phone,
        password,
      },
    }).then(res => {
      navigate('/')
    }).catch(res => info(res.response.data.message));
  }

  return (
    <div className="login">
      <h1>欢迎登录铁路订票后台管理系统</h1>
      <div className="login-from">
        <Input
          type="text"
          placeholder="请输入账号"
          value={phone}
          onChange={({ target }) => {
            setPhone(target.value);
          }}
        />
        <Input
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        {contextHolder}
        <Button
          type="primary"
          onClick={() => loginHandler()}
        >
          登录
        </Button>
      </div>
    </div>
  );
}