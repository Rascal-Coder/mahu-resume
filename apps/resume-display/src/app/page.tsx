'use client';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
const MaskBox = () => {
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMaskPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // 添加鼠标移动监听
    window.addEventListener('mousemove', handleMouseMove);

    // 销毁清除监听
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const maskImageStyle = {
    maskImage: `radial-gradient(200px at ${maskPosition.x}px ${maskPosition.y}px, black 0px, transparent 100%)`
  };
  return (
    <div className="group-hover:opacity-100 resume-mask-circle opacity-0 transition-all" style={maskImageStyle}></div>
  );
};
// const ResumeDefultPreview = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       {/* 姓名和职位 */}
//       <h1 className="text-4xl font-semibold text-gray-900">Rascl Coder</h1>
//       <p className="text-lg text-gray-600 mt-2">前端开发工程师</p>

//       {/* 联系方式 */}
//       <div className="mt-6">
//         <p className="text-gray-700">
//           <strong>邮箱:</strong> rasclcoder@example.com
//         </p>
//         <p className="text-gray-700">
//           <strong>电话:</strong> (123) 456-7890
//         </p>
//       </div>

//       {/* 教育背景 */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800">教育背景</h2>
//         <p className="text-gray-600">计算机科学学士学位，XYZ大学</p>
//       </div>

//       {/* 工作经历 */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800">工作经历</h2>
//         <p className="text-gray-600">前端开发工程师，ABC公司</p>
//         <p className="text-gray-600">软件工程师实习生，DEF公司</p>
//       </div>

//       {/* 项目经验 */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800">项目经验</h2>
//         <ul className="list-disc ml-6 text-gray-600">
//           <li>项目管理应用 - 使用 React 和 Node.js 开发的任务管理应用。</li>
//           <li>电子商务网站 - 构建了一个响应式电子商务网站，具有自定义购物车功能。</li>
//         </ul>
//       </div>

//       {/* 技能 */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800">技能</h2>
//         <p className="text-gray-600">JavaScript, React, CSS, HTML, Node.js, Git</p>
//       </div>

//       {/* 证书 */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800">证书</h2>
//         <p className="text-gray-600">前端开发认证 - XYZ学院</p>
//         <p className="text-gray-600">全栈网页开发证书 - ABC学院</p>
//       </div>
//     </div>
//   );
// };
const App = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // 显示礼花效果
    setShowConfetti(true);

    // 隐藏礼花效果，设置显示时间（例如3秒）
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // 3秒后隐藏

    // 清除计时器
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="group min-h-screen w-full h-full m-auto p-10 bg-black relative box-border">
      {showConfetti && <Confetti />}
      <div className=" resume-bg-circle"></div>
      <MaskBox></MaskBox>
      <div className="h-full min-h-[calc(100vh-5rem)] relative  m-auto p-7 bg-white max-w-[800px] z-10 rounded-md">
        {/* <ResumeDefultPreview></ResumeDefultPreview> */}
        我是简历
      </div>
    </div>
  );
};

export default App;
