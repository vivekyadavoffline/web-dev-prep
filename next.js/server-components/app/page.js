import fs from "fs/promises"
import path from "path"

export default async function Home() {
  const filePath = path.join(process.cwd(), "data.json")
  const fileData = await fs.readFile(filePath, "utf-8")
  const data = JSON.parse(fileData)

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-black shadow-lg rounded-xl p-5 border hover:shadow-xl transition"
        >
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">@{user.username}</p>

          <p className="mt-2 text-sm">
            📧 {user.email}
          </p>

          <div className="mt-3 text-sm text-gray-600">
            <p>🏙 {user.address.city}</p>
            <p>📍 {user.address.street}, {user.address.suite}</p>
            <p>📮 {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  )
}