import React from 'react'
import script from 'next/script'
const about = () => {
  return (
    <div>
      <script>{`
        alert("Welcome to about us page")`
      }
      </script>
      About us page
    </div>
  )
}

export default about
export const metadata = {
  title: "Facebook- this is about us page",
  description: "This is Facebook  - we can connnect with thw world using facebook",
};
