import Head from 'next/head'
import Link from 'next/link'
import classnames from 'classnames'
import { useState } from 'react';

function Tile({color, light, name, href, img}) {
  return(
    <Link href={{
      pathname: href,
      query: { name: name, color: color },
    }} >
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
          src={ img }
          />
          : null
      }
      </div>
      </a>
    </Link>
  )
}

function MenuModal({ isOpen, children, index }) {
  
  const isOpenClasses = classnames({
    '': isOpen,
    'none': !isOpen,
    'z-20': index === 0,
    'z-30': index === 1,
    'z-40': index === 2
  })
  
  return (
    <div className={`${isOpenClasses} bg-lightGray fixed top-0 left-0 w-screen h-screen flex justify-center`}>
      { children }
    </div>
  )
}

// function LightDismiss

function MiniNotifications() {
  return (
    <div className='mt-20 p-8 bg-white rounded-3xl' style={{ height:'500px', width:'820px' }}>
      Notifications...
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  
  // Locks document scrolling when menu is open
  if (typeof document !== "undefined") {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  
  function toggleGenericMenu(idx) {
    if (menuOpen && menuIndex === idx) {
      setMenuOpen(false)
    }
    if (menuOpen) {
      setMenuIndex(idx)
    }
    setMenuOpen(true)
    setMenuIndex(idx)
  }
  
  function toggleProfile(e) {
    e.stopPropagation()
    toggleGenericMenu(0)
  }
  
  function toggleNotifications(e) {
    e.stopPropagation()
    toggleGenericMenu(1)
  }
  
  function toggleSearch(e) {
    e.stopPropagation()
    toggleGenericMenu(2)
  }
  
  function lightDismiss(e) {
    e.stopPropagation()
    e.preventDefault()
    setMenuOpen(false)
  }
  
  const profileClassnames = classnames({
    'z-50': menuIndex === 0
  })
  
  const notificationsClassnames = classnames({
    'z-50': menuIndex === 1
  })
  
  const searchClassnames = classnames({
    'z-50 bg-white': menuIndex === 2,
    'bg-washedGray': menuIndex !== 2 || menuOpen === false
  })
  
  const lightboxClassnames = classnames({
    'z-20 flex': menuOpen === true,
    'hidden': menuOpen === false,
  })
  
  const menuClassnames = classnames({
    'z-30 flex': menuOpen === true,
    'hidden': menuOpen === false,
  })
  
  const lightDismissClassnames = classnames({
    'block cursor-pointer': menuOpen === true,
    'hidden': menuOpen === false,
  })
  
  return (
    <div className="w-screen flex flex-col">
      <Head>
        <title>Landscape • Home</title>
      </Head>
      
      <header onClick={(e) => lightDismiss(e)} className={`w-full flex justify-center items-center h-24 sticky top-0 left-0 z-30`} style={{backgroundColor:'rgba(255,255,255,0.95)', backdropFilter: 'blur(50px)'}}>
      
      <menu className="w-full max-w-screen-md flex p-0">
        <button onClick={(e) => toggleProfile(e)} className={`${profileClassnames} relative circle-button mr-2 bg-avatar-britney`} />
        <button onClick={(e) => toggleNotifications(e)} className={`${notificationsClassnames} relative circle-button mr-2 bg-blue text-white`}>3</button>
        <input onClick={(e) => toggleSearch(e)} type='text' className={`${searchClassnames} relative rounded-full w-full pl-4`} placeholder="Search Landscape" />
        
        <div className={`${lightboxClassnames}  pointer-events-none bg-lightGray fixed top-0 left-0 w-screen h-screen`} />
        
        <div className={`${menuClassnames} pointer-events-none fixed flex justify-center top-0 left-0 w-screen h-screen`}>
          <div className={`pointer-events-none rounded-2xl mt-20 overflow-y-scroll`} style={{ width: '840px', height: 'auto', maxHeight: '700px'}}>
            {
              menuIndex === 0
                ? <img className="w-full rounded-2xl h-auto" src="profile.png"/>
                : menuIndex === 1
                ? <img className="w-full rounded-2xl h-auto" src="notifications.png"/>
                : <img className="w-full rounded-2xl h-auto" src="search.png"/>
            }
          </div>
        </div>
        
      </menu>
    </header>

      <main className='h-full w-full flex justify-center pt-24 pb-32 relative z-0'>
        <div onClick={(e) => lightDismiss(e)} className={`${lightDismissClassnames} fixed top-0 left-0 w-screen h-screen`} />
        <div className={`flex flex-col space-y-6 ${menuOpen ? 'pointer-events-none' : ''}`} style={{width:'1100px'}}>
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
