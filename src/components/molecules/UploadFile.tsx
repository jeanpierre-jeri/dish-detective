import { useCallback, useState } from 'react'
import Dropzone from 'react-dropzone'

export default function UploadFile() {
  const [image, setImage] = useState<string>('')

  const handleDrop = useCallback(async (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        setImage(String(reader.result))
      }
      reader.readAsDataURL(file)
    })

    const formData = new FormData()
    formData.append('file', acceptedFiles[0])
    formData.append('timestamp', String(Date.now() / 1000))
    formData.append('api_key', '746269919163412')
    formData.append('upload_preset', 'imwmoga4')

    try {
      const data: any = await fetch('https://api.cloudinary.com/v1_1/dtvbgdakd/image/upload', {
        method: 'POST',
        body: formData
      }).then((response) => response.json())
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <>
      {image ? (
        <picture className='rounded-lg overflow-hidden flex'>
          <img src={image} alt='Food Image' />
        </picture>
      ) : (
        <Dropzone onDrop={handleDrop} maxFiles={1}>
          {({ getRootProps, getInputProps }) => (
            <section className='shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col cursor-pointer'>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='p-4'>Drag and drop your image here, or click here</p>
              </div>
            </section>
          )}
        </Dropzone>
      )}
    </>
  )
}
