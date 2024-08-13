'use client';
import { useLayoutEffect, useState } from 'react';

import PreLoader from '@/components/other/PreLoader';

import { Hero } from '@/app/home/Hero';
import { Steps } from '@/app/home/Steps';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isLoading]);
  return (
    // <main className="bg-[#000915] min-h-screen">

    // </main>
    <>
      {isLoading && <PreLoader onComplete={() => setIsLoading(false)} />}
      <main className="max-w-screen-2xl py-8 mx-auto  bg-dot px-8 text-gray-900 lg:px-12">
        <Hero />
        <Steps />
      </main>
    </>
  );
}
