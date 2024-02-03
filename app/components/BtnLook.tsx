interface IBtnLook {
  onClick: () => void
}

export const BtnLook = ({ onClick }: IBtnLook) => {
  return (
    <div onClick={onClick}>
      <button className='px-3 py-4 bg-gray-400 text-white block mx-auto'>
        shop the look
      </button>
    </div>
  )
}
