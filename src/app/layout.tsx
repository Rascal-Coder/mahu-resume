import { ToastContainer } from 'react-toastify';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import NextTopLoader from '@/components/NextTopLoader';

import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './providers';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  bg-[#000915] `}>
          <ToastContainer theme="dark"></ToastContainer>
          <Providers>
            <NextTopLoader color="#006fee" showSpinner={false}></NextTopLoader>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
