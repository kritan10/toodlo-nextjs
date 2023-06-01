'use client'

import { FaBars, FaCircle } from 'react-icons/fa'
import { useState } from 'react'

function Infobar() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(true)
    const isHidden: string = toggleMenu ? '' : 'hidden'

    return (
        <div
            className={`${
                toggleMenu ? 'w-[20%]' : 'w-[4%] '
            } max-h-screen overflow-scroll p-4 bg-slate-200 transition-all flex flex-col justify-between`}
        >
            <div>
                <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="block ml-auto hover:opacity-60 transition-opacity mb-14"
                >
                    <FaBars />
                </button>
                <h1 className={`text-lg font-semibold mb-4 ${isHidden}`}>Theme</h1>
                <div
                    className={`grid grid-cols-4 place-items-center gap-y-4 ${isHidden}`}
                >
                    <button className='hover:bg-red-100 p-1 rounded-full'>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                    <button>
                        <FaCircle />
                    </button>
                </div>
            </div>

            <div className={`${isHidden}`}>
                <h2 className="text-lg font-semibold">About</h2>
                <p className='text-sm'>Simple task manager app.</p>
                <p className="text-sm">Built using NextJS | TailwindCSS </p>
                <p className="text-sm">Hosted by Vercel</p>
            </div>
        </div>
    )
}

export default Infobar
