import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button';
import { ScanText } from 'lucide-react';
import NavLink from './nav-links';
import { ModeToggle } from '../mode-toggle';

function Header() {

  const isLoggedIn = 0;
  return (
    <nav className='p-2 flex justify-between items-center py-4 lg:px-8 px-2 '>

      <div className='flex items-center gap-2'>
      
        <NavLink href="/" className='text-xl flex items-center gap-1 lg:gap-2 shrink-0'>
        <ScanText className='w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out inline'/>
        <span className='font-extrabold lg:text-xl text-gray-900'> Matomeru</span>
       
        
        </NavLink>
       
        
      </div>

{/* 
      <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
        {
          isLoggedIn ? <NavLink href="/dashboard">Your Summaries</NavLink>: <NavLink href="/pricing">Pricing</NavLink> 
        }
        
        
      </div> */}

     


      <div className='flex lg:justify-end '>
        {
          isLoggedIn ? <div className='flex gap-2 items-center'>
          <NavLink href="/upload">Upload PDF</NavLink>
          <div>Pro</div>
          <Button>User</Button>
        </div> :  <div><NavLink href="/sign-in">Sign In</NavLink></div>
        }
        

       
        
      </div>
    </nav>
  )
}

export default Header