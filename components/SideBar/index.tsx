'use client'

import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { Profiler } from 'react'

export const SideBar = () => {
  return (
    <ul className="flex w-64 flex-col gap-3 p-2">
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Home />
          <span>ホーム</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Search />
          <span>検索</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Notifications />
          <span>通知</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <MessageRounded />
          <span>メッセージ</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Bookmark />
          <span>ブックーマーク</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Person />
          <span>プロフィール</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-sm bg-slate-100 px-3 py-2 shadow-sm"
        >
          <Settings />
          <span>設定</span>
        </Link>
      </li>
    </ul>
  )
}
