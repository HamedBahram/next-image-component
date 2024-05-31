import Image from 'next/image'

import unsplash from '@/public/unsplash.jpg'
import DynamicImage from '@/components/dynamic-image'

const URL = 'https://images.unsplash.com/photo-1716396484354-e90091645e0b'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next Image Component</h1>

        <div className='mt-16 flex gap-6'>
          <div>
            <h2 className='text-sm font-semibold uppercase italic tracking-wider text-gray-500'>
              Local (Static)
            </h2>
            <div className='relative mt-1 h-96 w-60'>
              <Image
                alt=''
                src={unsplash}
                placeholder='blur'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>

          <div>
            <h2 className='text-sm font-semibold uppercase italic tracking-wider text-gray-500'>
              Remote (Dynamic)
            </h2>
            <DynamicImage url={URL} containerClass='mt-1 h-96 w-60' />
          </div>
        </div>
      </div>
    </section>
  )
}
