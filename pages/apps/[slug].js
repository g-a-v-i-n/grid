import Head from 'next/head'
import Link from 'next/link'

export default function App() {
  return (
    <div className="w-screen h-screen flex">
    <Head>
      <title>App</title>
    </Head>
      <div className="w-96 h-full bg-white p-6 border-r-2 border-silver">
        <div className="flex items-center">
          <div className="mr-2 w-6 h-6 bg-black rounded-full" />
          <h3>App</h3>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full h-16 border-b-2 border-silver" />
        <div className="w-full h-16 border-t-2 border-silver" />
      </div>
    </div>
  )
}
