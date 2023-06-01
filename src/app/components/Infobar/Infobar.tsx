'use client'

import { FaBars, FaCircle } from 'react-icons/fa'
import { useState } from 'react'
import ThemeButton from './ThemeButton'
import InfobarAbout from './About'

function Infobar() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const isHidden: string = toggleMenu ? '' : 'hidden'
    const themeButtons = [
        '#fafafa',
        '#3c3c3e',
        '#e6f3ef',
        '#4285f4',
        '#fbbc04',
        '#ef4444',
        '#fbbf24',
        '#a3e635',
    ]

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
                <h1 className={`text-lg font-semibold mb-4 ${isHidden}`}>
                    Theme{' '}
                    <span className="text-xs font-normal opacity-50">
                        (Under development)
                    </span>
                </h1>
                <div
                    className={`grid grid-cols-4 place-items-center gap-y-4 ${isHidden}`}
                >
                    {themeButtons.map((btn, index) => (
                        <ThemeButton key={index} fill={btn} />
                    ))}
                </div>
            </div>

            <InfobarAbout isHidden={isHidden} />
        </div>
    )
}

export default Infobar
