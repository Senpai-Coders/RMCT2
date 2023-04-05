import Head from 'next/head'

import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>rmct2</title>
        <meta name="description" content="Admin Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen px-5 md:px-16">
        <p className='text-red-400'>Test</p>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
