'use client'

import { Chat, Notifications, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Post } from '../Post'
import { Share } from '../Share'

export const Timeline = () => {
  return (
    <div className="flex-1 bg-gray-300">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
