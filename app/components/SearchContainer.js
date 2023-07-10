"use client"
import Link from 'next/link'

const SearchContainer = ({type,title,destination}) => {
  const componentType={
    Client:"bg-blue-900 text-blue-600",
    Server:"bg-orange-900 text-orange-600"
  }
  return (
    <Link href={destination} className='flex flex-col items-start px-8 py-[3rem] rounded-lg glassEffect'>
        <p className={`px-2 py-1 rounded ${type==="Client"?componentType.Client:componentType.Server} `}>{type}</p>
        <h6 className='mt-2 text-lg font-semibold'>{title}</h6>
    </Link>
  )
}

export default SearchContainer