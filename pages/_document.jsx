import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden duration-500 ease-in-out text-gray-800 dark:text-gray-300 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
