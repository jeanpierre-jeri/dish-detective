import type { PropsWithChildren } from 'react'
import { Footer, Header } from '../organisms'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='bg-slate-800 text-white py-8 px-4 min-h-screen flex flex-col justify-between items-center'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
