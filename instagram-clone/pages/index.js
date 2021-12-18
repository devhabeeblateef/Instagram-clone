import Head from 'next/head'
import  Header from "../components/Header"
import Feed from "../components/Feed"
export default function Home() {
  return (
    <div className="bg-gray-59 h-screen overflow-y-scroll
    scrollbar-hide">
      <Head>
        <title>Instagram 2.0 Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
     {/* Header */}
        <Header/>
       {/* Feed */}
    <Feed/>
       {/* Modal */}
    </div>
  )
}
