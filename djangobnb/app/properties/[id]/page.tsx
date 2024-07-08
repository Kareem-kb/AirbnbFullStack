import Image from 'next/image'
import Beach from '@/public/Beach 1 from djangobnb.jpg'
import profile from '@/public/Profile pic 1.jpg'
import ReservationSidebar from '@/app/Components/Properties/ReservationSidebar'

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full mb-4 h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={Beach}
          alt="Property image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          {' '}
          <h1 className="mb-4 text-4xl"> Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {' '}
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src={profile}
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />
            <p>
              <strong> John Doe</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            sdfjvdnf fvefv efvefv qerqeqer wrt ererg ergqerg qergqergqerg
            qergqerger qergqerg qergqerg er
          </p>
        </div>
          <ReservationSidebar />
      </div>
    </main>
  )
}

export default PropertyDetailPage
