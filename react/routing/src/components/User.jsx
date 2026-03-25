import React from 'react'
import { useParams } from "react-router-dom";
const user = () => {
  const { username } = useParams();
  return (
    <div>
      hello ji main {username} hu
    </div>
  )
}

export default user
