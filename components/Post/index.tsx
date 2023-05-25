'use client'

import {
  Analytics,
  Chat,
  Face,
  Gif,
  ImageAspectRatio,
  MoreVert,
  Notifications,
  Search,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Post = () => {
  return (
    <div className="mt-4 flex-1 rounded-xl bg-white p-5 shadow-xl">
      <div className="flex justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Image src={'/assets/person/1.jpg'} alt="" width={50} height={50} />
          <div className="text-xl font-bold">Kojima</div>
          <div className="text-sm">5分前</div>
        </div>
        <div>
          <MoreVert />
        </div>
      </div>
      <div className="pb-5 pl-14 pt-2">
        <span>SNSを自作中です。</span>
        <Image
          src="/assets/post/1.jpg"
          alt=""
          fill
          className="!static my-2 max-h-80 rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Image src={'/assets/heart.png'} alt="" width={18} height={18} />
          <div className="text-sm">20人がいいねしました</div>
        </div>
        <div className="text-sm">4:コメント</div>
      </div>
    </div>
  )
}
