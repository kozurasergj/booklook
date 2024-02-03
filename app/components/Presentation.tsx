'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BtnLook } from './BtnLook'
import { ProductsModal } from './ProductsModal'

export const Presentation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className='mb-6'>
      <div className='flex items-center justify-between my-6'>
        <Image
          src='https://www.nanushka.com/cdn/shop/files/lookbook_pf22_02.jpg?v=1688736030&width=1500'
          className=''
          alt='icon buy'
          width={1500}
          height={2264}
        />
        <h3 className='text-lg text-center  px-4'>
          Our latest collection demonstrates an elegant eccentricity – bold
          patterns inspired by traditional nomadic dressing, embroidered
          buttons, ceramic detailing and artisanal stitching contrast with
          stark, clean-lined silhouettes that showcase refined modernity.
        </h3>
      </div>
      <BtnLook onClick={openModal} />
      <ProductsModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
