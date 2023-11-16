import Data from './data2'
import SearchButton from '@/components/SearchButton'
import { Banner } from '@/components/banner'
export default function Home() {
  return (

    <div
      className='md:w-[80%] mx-auto'
    >
      <Banner/>


      <Data categ={"React"} />
      <Data categ={"Web"} />
      <Data categ={"Networking"} />
      <Data categ={"HTML"} />

    </div>
  )
}
