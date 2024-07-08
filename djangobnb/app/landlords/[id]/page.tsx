import Image from 'next/image'
import Profile from '@/public/Profile pic 1.jpg'
import ContactButton from '@/app/Components/ContactButton'
import PropertyList from '@/app/Components/Properties/PropertyList'

const LandlordsDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src={Profile}
              width={200}
              height={200}
              alt="Landlord name"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl"> landlord name</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="md:col-span-3 pl-0 md:pl-6 col-span-1">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  )
}
export default LandlordsDetailPage
