import Image from 'next/image'
import Beach from '@/public/Beach 1 from djangobnb.jpg'
import PropertyList from '@/app/Components/Properties/PropertyList'

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-2xl my-6 "> My Properties</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyList />
          </div>
    </main>
  )
}

export default MyPropertiesPage
