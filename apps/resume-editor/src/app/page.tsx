'use client';

import useUserStore from '@/store/user';
const Info = () => {
  const { userInfo, token, updateUserInfo, updateAge, updateToken } = useUserStore();

  return (
    <div className="App">
      前台没有照片!!!
      <div>
        姓名：{userInfo.name} 年龄：{userInfo.age}
      </div>
      <div>token：{token}</div>
      <button onClick={() => updateUserInfo({ name: 'lisi', age: 24 })}>更新用户</button>
      <button onClick={() => updateAge(userInfo.age + 1)}>更新���龄</button>
      <button onClick={() => updateToken('23652')}>更新token</button>
    </div>
  );
};

export default Info;
