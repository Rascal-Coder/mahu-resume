'use client';
// import { useLayoutEffect, useState } from 'react';

import PreLoader from '@/components/other/PreLoader';

import { Hero } from '@/app/home/Hero';
import { Steps } from '@/app/home/Steps';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll">
      <PreLoader></PreLoader>
      <main className="max-w-screen-2xl py-8 mx-auto  bg-dot px-8 text-gray-900 lg:px-12">
        <Hero />
        <Steps />
      </main>
    </main>
  );
}
