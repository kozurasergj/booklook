import Image from 'next/image'
import { productsData } from '../mocks'
import { BtnClose } from './BtnClose'
import { useSelectedProducts } from './SelectedProductsContext'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BasketModal = ({ isOpen, onClose }: ProductModalProps) => {
   const { selectedProducts } = useSelectedProducts()

   const selectedProductsData = productsData.filter((product) =>
     selectedProducts.includes(product.id)
   )

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <ul className='flex flex-col justify-start gap-2 overflow-scroll mx-auto'>
          {selectedProductsData.map((product) => (
            <li key={product.id}>
              <div className='flex m-3'>
                <Image
                  className=''
                  alt='icon buy'
                  width={200}
                  height={300}
                  src={product.imageSrc}
                />
                <div className='flex justify-between'>
                  <div className='flex flex-col w-[70%] items-start justify-between'>
                    <h3 className='text-left mx-6 mb-6 text-2xl'>
                      {product.name}
                    </h3>
                    <p className='mx-6 mb-6 text-left'>{product.description}</p>
                    <button
                      className='mx-6 py-2 px-5 border border-black rounded-md hover:bg-gray-200'
                    >Go to checkout</button>
                  </div>
                  <div className='flex flex-col w-[30%] mr-2'>
                    <span className='text-right'>{product.price}</span>
                    <span className='text-right text-with-line w-fit ml-auto'>
                      {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {selectedProductsData.length === 0 && (
          <div className='m-auto'>
            <p className='text-right mx-auto'>
              Your basket is currently empty.
            </p>
          </div>
        )}
        <BtnClose onClose={onClose} />
      </div>
    </div>
  )
}
