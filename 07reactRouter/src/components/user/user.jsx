import {} from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {useid} = useParams()
  return (
    <div>user:{useid}</div>
  )
}

export default User