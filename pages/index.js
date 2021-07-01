import Head from 'next/head'
import Link from 'next/link'

function Tile({color, light, name, href, img}) {
  return(
    <Link href={href} >
      <a target="_blank">
      <div className={'rounded-xl relative cursor-pointer'} style={{width:'250px', height:'250px', backgroundColor: color || 'purple'}}>
      <h3 className={`${light ? 'text-midWhite' : 'text-gray'} absolute bottom-7 left-7`}>{name}</h3>
      {
        img
          ? <img style={{
            width:'100px',
            height:'100px',
            top: '75px',
            left: '75px',
            position: 'absolute'            
          }}
          src={img}
          />
          : null
      }
      </div>
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
    <Head>
      <title>Landscape • Home</title>
    </Head>
    <header className="w-full flex justify-center items-center h-24">
      <menu className="w-full max-w-screen-md flex">
          <button className='circle-button mr-2 bg-black' />
          <button className='circle-button mr-2 bg-blue text-white'>1</button>
          <input type='text' className='bg-washedGray rounded-full w-full pl-4' placeholder="Search Landscape" />
      </menu>
    </header>
    <main className='h-full w-full flex justify-center pt-16 pb-16'>
      <div className='flex flex-col space-y-6' style={{width:'1100px'}}>
        <div className="flex space-x-6">
          <Tile color='#CDE7EF' name='Groups' href='/apps/groups' />
          <Tile color='#8BE789' name='Messages' href='/apps/messages' />
          <Tile color='#C2D6BE' name='Calls' href='/apps/calls' />
          <Tile color='#F0AE70' name='Bitcoin Wallet' href='/apps/bitcoin-wallet' />
        </div>
        <div className="flex space-x-6">
          <Tile color='#2D0118' name='System' href='/apps/system' light img='system.png'/>
          <Tile color='#D8B14E' name='My Apps' href='/apps/my-apps' />
          <Tile color='#A58E52' name='Go' href='/apps/go' img='go.png'/>
          <Tile color='#2D382B' name='Terminal' href='/apps/terminal' light/>
        </div>
        <div className="flex space-x-6">
          <Tile color='#EE5432' name='Pomodoro' href='/apps/pomodoro' light />
          <Tile color='#DCDCDC' name='Clocks' href='/apps/clocks' />
          <Tile color='#FDA1FF' name='Uniswap' href='/apps/uniswap'/>
          <Tile color='#FEFFBA' name='Inbox' href='/apps/inbox'/>
      </div>
      </div>
    </main>
  </div>
  )
}
