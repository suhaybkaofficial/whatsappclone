import Left from '@/components/Left'
import Right from '@/components/Right'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='flex h-full'>
        <div className='flex-[1_1_0%]'>
        <Left />
        </div>
        <div className='flex-[3_3_0%]'>
        <Right />
        </div>
      </div>
    </main>
  )
}
