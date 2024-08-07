'use client';
import Image from 'next/image';
// import style from './page.module.scss';
// export default function Home() {
//   return (
//     <>
//       <span className={style.title}>111</span>
//       <span style={{ color: style.primaryColor }}>222</span>
//       <button>1111</button>
//     </>
//   );
// }

import useUserStore from '@/store/user';
const Info = () => {
  const { userInfo, token, updateUserInfo, updateAge, updateToken } = useUserStore();

  return (
    <div className="App">
      前台有照片：
      <Image
        alt="Description of the image"
        width={400}
        height={200}
        priority={true}
        style={{
          height: 'auto',
          width: '200px'
        }}
        src={
          'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc4524d54148226cffc1e171601?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,w_437'
        }
      ></Image>
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
