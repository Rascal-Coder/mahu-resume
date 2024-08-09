'use client';
// import React from 'react';

import PreLoader from '@/components/other/PreLoader';

export default function Home() {
  return (
    <>
      <PreLoader />
      <main className="min-h-screen flex flex-col items-center justify-center bg-black"></main>
    </>
  );
}
