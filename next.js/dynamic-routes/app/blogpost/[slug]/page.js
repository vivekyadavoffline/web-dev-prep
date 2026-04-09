export default async function Page({ params }) {
  const { slug } = await params
  let name = ["vivek", "sachin", "satyarth" , "yadav"]
  if (name.includes(slug)) {
    return <h1>Post: {slug}</h1>
  }
  else {
    return <h1>Post Not Found</h1>
  }
}