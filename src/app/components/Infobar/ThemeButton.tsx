import { FaCircle } from 'react-icons/fa'

function ThemeButton({ fill }: { fill: string }) {
    return (
        <button className="hover:bg-red-100 p-1 rounded-full">
            <FaCircle size="24" fill={fill} />
        </button>
    )
}

export default ThemeButton
