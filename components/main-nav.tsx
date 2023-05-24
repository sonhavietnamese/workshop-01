'use client'

import { CircleDollarSign, Shirt } from 'lucide-react'
import { Button } from './ui/button'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { COIN_SYMBOL } from '@/configs/coin-symbol'

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className='fixed z-10 w-full select-auto' {...props}>
      <div className='flex h-24 items-center justify-between gap-4 px-10'>
        <div className='flex items-center justify-center gap-3'></div>
        <div className=' flex items-center gap-2'>
          <Button className='flex gap-2'>
            <CircleDollarSign size={16} /> 3 {COIN_SYMBOL}
          </Button>
          {/* <Button>Connect Wallet</Button> */}
          <WalletMultiButton />
        </div>
      </div>
    </div>
  )
}
