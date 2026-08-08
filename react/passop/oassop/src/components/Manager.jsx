import { useRef, useState, useEffect } from 'react';
const Manager = () => {
    const inputRef = useRef();
    const imgRef = useRef();
    const [passwordArray, setPasswordArray] = useState([]);
    useEffect(() => {
        let password = localStorage.getItem("passwords");
        if (password) {
            setPasswordArray(JSON.parse(password))
        }
    }, [])
    const showPassword = () => {
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text";
            imgRef.current.src = "/src/assets/openeye.svg";
        } else {
            inputRef.current.type = "password";
            imgRef.current.src = "/src/assets/closedeye.svg";
        }
    };
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const [form, setForm] = useState({ site: "", username: "", password: "" });

    return (
        <section className="relative isolate min-h-lvh overflow-hidden">
            <img
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                src="https://tailkits.com/ui/iframe/assets/img/bg-fade-1.png"
                alt="Fade background"
            />

            <div className="relative mycontainer">
                <h1 className="text-center text-4xl font-bold">
                    <span className="text-purple-500">&lt;</span>
                    Password
                    <span className="text-purple-500">Manager/</span>
                    <span className="text-purple-500">&gt;</span>
                </h1>

                <p className="text-center text-lg capitalize text-purple-800">
                    your own password manager
                </p>

                <div className="mt-6 rounded-md border border-purple-900 bg-purple-200 p-4">
                    <div className="flex flex-col gap-3">
                        <input
                            type="text" value={form.site} onChange={handleChange}
                            placeholder="Website URL" name="site"
                            className="rounded-md border border-purple-900 bg-white px-3 py-2 outline-purple-500"
                        />

                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Username" value={form.username} onChange={handleChange}
                                className="w-1/2 rounded-md border border-purple-900 bg-white px-3 py-2 outline-purple-500" name="username"
                            />
                            <div className="relative w-1/2">
                                <input ref={inputRef}
                                    type="password" value={form.password} onChange={handleChange}
                                    placeholder="Password" name="password"
                                    className="w-full rounded-md border border-purple-900 bg-white px-3 py-2 pr-12 outline-purple-500"
                                /> <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={showPassword}> <img ref={imgRef} src="/src/assets/closedeye.svg" alt="eye" className="w-7" /></span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <button onClick={savePassword} className="rounded-md border border-purple-100 bg-purple-400 px-4 py-2 flex items-center gap-2 hover:bg-purple-400 hover:border-purple-800 text-white bold font-bold">
                                <lord-icon
                                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                                    trigger="hover"
                                    style={{ width: "25px", height: "25px" }}
                                ></lord-icon>
                                Add Password
                            </button>
                        </div>
                    </div>
                </div>


                <div> {/*  showPassword block  */}       </div>
                <div >
                    <h2 className="text-center font-extrabold  capitalize text-purple-500 text-2xl" >Your Passwords </h2>
                    {passwordArray.length === 0 && (
                        <div className="mt-4 flex flex-col items-center rounded-xl border-2 border-dashed border-purple-400 bg-purple-100 py-8">

                            <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                                colors="primary:#9333ea,secondary:#c084fc"
                                style={{ width: "28px", height: "28px" }}
                            ></lord-icon>

                            <h2 className="mt-2 text-xl font-bold text-purple-700">
                                No Passwords Yet
                            </h2>

                            <p className="text-gray-600">
                                Save your first password to see it here.
                            </p>

                        </div>
                    )}
                    {passwordArray.length != 0 && <div className="passwords overflow-hidden   rounded-md border bg-white border-purple-900">
                        <table className="table-auto w-full rounded-md  p-4">
                            <thead className=" bg-purple-400 text-white rounded-t-lg">
                                <tr className='border-b border-purple-900 divide-x  '>
                                    <th > Website URL</th>
                                    <th > Username</th>
                                    <th> Password</th>
                                </tr>
                            </thead>
                            <tbody className=' divide-y divide-purple-900 '>
                                {passwordArray.map((item) => {
                                    return (
                                        <tr className="divide-x divide-purple-900  ">
                                            <td className="cursor-pointer  flex  items-center hover:text-purple-500  text-left min-w-32 pl-2 "><a href={item.site} target="_blank">{item.site} <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"  ></lord-icon></a></td>
                                            <td className="text-center selection:text-purple-500 ">{item.username}</td>
                                            <td className="text-center min-w-32  selection:text-purple-500 ">{item.password}</td>
                                        </tr>);
                                })}
                            </tbody>
                        </table>
                    </div>}
                </div>


            </div>
        </section>
    )
}

export default Manager