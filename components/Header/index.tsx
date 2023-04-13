import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex h-14 items-center bg-slate-100">
      <div className="px-5 text-2xl font-medium">Facetter</div>
      <div className="flex-1 px-56">
        <input type="text" className="h-8 w-full rounded-md px-3" />
      </div>
      <div className="flex gap-3 px-5">
        <Link href={'#'}>メッセージ</Link>
        <Link href={'#'}>通知</Link>
        <Link href={'#'}>アイコン</Link>
      </div>
    </div>
  )
}
