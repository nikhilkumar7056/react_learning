import {  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data ,SetData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nikhilkumar7056')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         SetData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-3xl bg-red-300 text-black px-5 py-5'>
        Github id: {data.id}
        <br/>
        Github Repo:{data.public_repos}

    <img src={data.avatar_url} alt='github picture'></img>
    </div>
  )
}

export default Github

export const GithubInfo = async () => {
   const response = await fetch('https://api.github.com/users/nikhilkumar7056')
   return response.json()
} 