'use client';
// import PreLoader from '@/components/other/PreLoader';

import AnimationResume from './home/AnimationResume';

import { Hero } from '@/app/home/Hero';

export default function Home() {
  return (
    <>
      {/* <PreLoader /> */}
      <main className="flex mx-auto bg-dot px-8 pb-32 text-gray-900 lg:px-12 bg-black">
        <Hero />
        <AnimationResume />
      </main>
    </>
  );
}
