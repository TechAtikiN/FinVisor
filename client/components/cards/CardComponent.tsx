const CardComponent = () => {
  return (
    <div className='my-5 mx-8'>
      <div className='w-[415px] absolute h-60 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-400 to-sky-600'>
        <div className='flex flex-col mx-6 text-white'>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-lg font-semibold opacity-80'>Credit Card</p>
            <p className='font-bold text-2xl'>VISA</p>
          </div>
          <p className='text-xl font-semibold mt-14'>9898  2344  1222  1221</p>
          <div className='flex justify-between items-center mt-14'>
            <p className='text-3xl font-bold'>$2344.87</p>
            <p className='font-semibold opacity-80'>08/25</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
