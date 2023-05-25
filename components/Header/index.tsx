'use client'

import { Chat, Notifications, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex h-14 items-center bg-slate-600">
      <div className="px-5 font-sans text-2xl font-bold text-white">
        Twitter
      </div>
      <div className="flex-1 px-56">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
          <input type="text" className="h-8 w-full rounded-2xl pl-9 pr-4" />
        </div>
      </div>
      <div className="flex items-center gap-5 px-5 text-white">
        <Link href={'#'} className="relative">
          <Chat />
          <span className="absolute -bottom-1 -right-2">1</span>
        </Link>
        <Link href={'#'} className="relative">
          <Notifications />
          <span className="absolute -bottom-1 -right-2">2</span>
        </Link>
        <Link href={'#'}>
          <Image src="/assets/person/1.jpg" alt="" width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}
