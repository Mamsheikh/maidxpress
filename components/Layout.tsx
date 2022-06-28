import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- MaidXpress' : 'MaidXpress'}</title>
        <meta></meta>
        <link rel='stylesheet' href='' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header className=''>
          <nav className='flex h-12 justify-between shadow-md items-center px-4'>
            <Link href='/'>
              <a className='text-lg font-bold'>MaidXpress</a>
            </Link>
            <div>
              <Link href='/cart'>
                <a className='p-2'>Cart</a>
              </Link>
              <Link href='/login'>
                <a className='p-2'>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>
          <p className=''>Copyright &copy; 2022 MaidXpress</p>
        </footer>
      </div>
    </>
  );
};
export default Layout;
