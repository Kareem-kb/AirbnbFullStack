import Image from 'next/image'
import Beach from '@/public/Beach 1 from djangobnb.jpg'

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={Beach}
          alt=" Beach house"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold"> property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm"> $200</p>
      </div>
    </div>
  )
}

export default PropertyListItem
