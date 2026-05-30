import {} from 'react'
import { useLoaderData } from 'react-router-dom'

function Meme() {
    const data = useLoaderData()
    const images = data.result.preview_images;

    for(const image of images){

      console.log(image)
    }
  return (
    <div className='bg-pink-400 text-center text-3xl  text-black px-5 py-5 '>
      Meme:{data.code}
      <img src={data.result.meme_url}/>
    
     <img src={data.result.preview_images[0]}/>
    </div>
  )
}

export default Meme

export const MemeInfo = async()=>{
   const response = await fetch('https://abhi-api.vercel.app/api/fun/meme?nsfw=false')
   return response.json()
}