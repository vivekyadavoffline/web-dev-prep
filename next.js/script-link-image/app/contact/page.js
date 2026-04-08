import React from 'react'
import script from 'next/script'
const contact = () => {
  return (
    <div>
      <script>{`
          alert("Welcome to contact us page")
          `}
      </script>
      Contact us page
    </div>
  )
}

export default contact
export const metadata = {
  title: "Facebook- this is contact us page",
  description: "This is Facebook  - we can connnect with thw world using facebook",
};
