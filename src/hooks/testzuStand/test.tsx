import React from 'react'
import { useUserStore } from '../stores/useUserStore'

const LoginComponent = () => {
  const { login, user } = useUserStore()
  const count = useUserStore((state) => state.count)
  const handleLogin = () => {
    // 假设你已经从某处获取了用户信息
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com'
    }

    // 直接将用户对象传给 login 方法
    login(user)
  }

  // 当 user 发生改变时，这个组件将会重新渲染，并显示最新的 user.name
  return (
    <>
      <div>{user ? <h1>Hello, {user.name}</h1> : <h1>Please log in</h1>}</div>
      <button onClick={handleLogin}>Log in {count}</button>
    </>
  )
}
