'use client'

import {
  Analytics,
  Chat,
  Face,
  Gif,
  ImageAspectRatio,
  Notifications,
  Search,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

export const Share = () => {
  return (
    <div className="flex-1 rounded-xl bg-white shadow-xl">
      <div className="flex gap-4 p-5">
        <Image src="/assets/person/1.jpg" alt="" width={60} height={60} />
        <input
          type="text"
          placeholder="今なにしてるの？"
          className="w-full p-2 outline-none"
        />
      </div>
      <hr />
      <div className="flex justify-between px-5 py-3">
        <div className="flex gap-1">
          <button className="flex items-center gap-1 rounded-full px-2 py-1 hover:bg-gray-200">
            <ImageAspectRatio />
            写真
          </button>
          <button className="flex items-center gap-1 rounded-full px-2 py-1 hover:bg-gray-200">
            <Gif />
            GIF
          </button>
          <button className="flex items-center gap-1 rounded-full px-2 py-1 hover:bg-gray-200">
            <Face />
            気持ち
          </button>
          <button className="flex items-center gap-1 rounded-full px-2 py-1 hover:bg-gray-200">
            <Analytics />
            投票
          </button>
        </div>
        <button className="rounded-full bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
          投稿
        </button>
      </div>
    </div>
  )
}
