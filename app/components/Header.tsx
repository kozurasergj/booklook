'use client'
import { useState } from 'react'
import { BasketModal } from './BasketModal'
import { BtnBasket } from './BtnBasket'

const Header = () => {
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false)

  return (
    <header>
      <div className='flex items-center justify-between m-6 '>
        <h1 className='text-4xl text-center mx-auto'>Nanushka</h1>
        <BtnBasket setIsBasketModalOpen={setIsBasketModalOpen} />
        <BasketModal
          isOpen={isBasketModalOpen}
          onClose={() => setIsBasketModalOpen(false)}
        />
      </div>
    </header>
  )
}

export default Header
