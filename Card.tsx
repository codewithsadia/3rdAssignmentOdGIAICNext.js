import React from 'react'
import Image from 'next/image';

interface propsType{
    title:string;
    desc: string;
    img:string;
    tags: string[];
}

const Card: React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className='border border-accent bg-pink-400 text-red-700 w-[200px] sm:w-[250px]'>
      <div>
        <image className='w-[200px] sm:w-[200px] h-auto'
        src={img}
        width={200}
        height={250}
        alt={title}
        />
      </div>
      <div className='p-3 space-y-3'>
       <div className='text-2xl font font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el)=>(
          <div className='tags' key={el}>
{el}
          </div> ))}
        </div>
      </div>
    </div>
  )
}

export default Card
