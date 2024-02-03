import Image from 'next/image'
import { productsData } from '../mocks'
import { BtnClose } from './BtnClose'
import { useSelectedProducts } from './SelectedProductsContext'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ProductsModal = ({ isOpen, onClose }: ProductModalProps) => {
  const { addProductToSelection } = useSelectedProducts()

  const handleAddToBag = (productId: number) => {
    addProductToSelection(productId)
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <Image
          src='/logo.webp'
          className='modal-img'
          alt='icon buy'
          width={1500}
          height={2264}
        />
        <ul className='flex flex-col justify-between gap-2 overflow-scroll'>
          {productsData.map((product) => (
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
                      onClick={() => handleAddToBag(product.id)}
                      
                    >
                      Add to bag
                    </button>
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
        <BtnClose onClose={onClose} />
      </div>
    </div>
  )
}
