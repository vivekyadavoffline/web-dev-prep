"use client";

export default function Home() {

  const handleClick = async () => {
    const data = {
      name: "vivek",
      role: "developer"
    };

    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">
        Next.js API routes demo
      </h1>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me
      </button>
    </div>
  );
}