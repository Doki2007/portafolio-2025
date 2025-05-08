import React, { useState } from 'react'

const Card = () => {
   
    const [showMore, setShowMore] = useState(false);
    const shortDescription = 'I am a software developer graduated from ISIL. This is a college in Lima, Peru.';
    const longDescription = 'I am also 24 years old and I love to listen to music. And I am looking forward to become a great software developer.';

    const handleClick = () => {
        setShowMore(prevState => !prevState);
    }


  return (
    <div className='flex flex-col justify-center items-center min-h-dvh bg-amber-300/50 p-5'> 
        <div className='flex flex-col max-w-[400px] gap-4 sm:max-w-[750px]'>
            <div className='flex mr-auto text-cyan-950 text-4xl font-black'>My Card</div>
            <div className='flex flex-col bg-cyan-950 justify-between items-center max-w-sm p-5 gap-4 rounded-lg shadow-lg shadow-amber-800 sm:flex-row sm:max-w-3xl sm:py-10'>
                <div className="flex">
                    <img    className='h-60 rounded-full shadow-lg shadow-black/50 '
                            src="/horizontal.jpeg" alt="My face" />
                </div>
                <div className="flex flex-col text-center max-w-[320px] text-amber-200/90 gap-2">
                    <p 
                        className='text-3xl font-bold border-b-1 border-amber-200/50 sm:text-4xl'>
                            Jamir Garro 
                    </p>
                    <p 
                        className='text-white/80 text-lg text-pretty'>
                            { showMore ? longDescription : shortDescription } 
                    </p>
                    <button 
                        onClick={handleClick} 
                        className='mt-3 p-2 text-md bg-cyan ring-1 cursor-pointer rounded-full  text-balance'>
                            { showMore ? 'See less' : 'See more'}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card