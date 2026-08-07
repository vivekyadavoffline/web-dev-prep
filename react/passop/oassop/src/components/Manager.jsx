import { useRef , useState,useEffect } from 'react';
const Manager = () => {
    const ref = useRef();
    const [passwordArray, setPasswordArray] = useState([]);
    useEffect(() => {
        let password = localStorage.getItem("passwords");
        if (password) {
            setPasswordArray(JSON.parse(password))
        }
    }, [])

    const showPassword = async () => {
        if (ref.current.src.includes("closedeye.svg")) {
            ref.current.src = "/src/assets/openeye.svg"
        }
        else { ref.current.src = "/src/assets/closedeye.svg" }
    }
    const savePassword = async () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray , form]))
          console.log(...passwordArray , form)
    }
    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const [form, setform] = useState({ site: "", username: "", password: "" });

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
                            type="text" vaule={form.site} onChange={handelChange}
                            placeholder="Website URL" name="site"
                            className="rounded-md border border-purple-900 bg-white px-3 py-2 outline-purple-500"
                        />

                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Username" value={form.username} onChange={handelChange}
                                className="w-1/2 rounded-md border border-purple-900 bg-white px-3 py-2 outline-purple-500" name="username"
                            />
                            <div className="relative w-1/2">
                                <input
                                    type="text" value={form.password} onChange={handelChange}
                                    placeholder="Password" name="password"
                                    className="w-full rounded-md border border-purple-900 bg-white px-3 py-2 pr-12 outline-purple-500"
                                /> <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={showPassword}> <img ref={ref} src="/src/assets/openeye.svg" alt="eye" className="w-7" /></span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <button onClick={savePassword} className="rounded-md border border-purple-100 bg-purple-500 px-4 py-2 flex items-center gap-2 hover:bg-purple-400 hover:border-purple-800">
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
            </div>
        </section>
    )
}

export default Manager