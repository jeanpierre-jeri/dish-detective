import { UploadFile } from '@/components/molecules'

export default function Home() {
  return (
    <main>
      <h1 className='text-xl text-center'>Upload a photo to start</h1>
      <div className='mt-4'>
        <UploadFile />
      </div>
    </main>
  )
}
