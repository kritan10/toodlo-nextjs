function InfobarAbout({ isHidden }: { isHidden: string }) {
    return (
        <div className={`${isHidden}`}>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-xs my-3">
                Web-based task management app to help you keep track of your
                day-to-day activities.
            </p>
            <div className="bg-slate-400 w-full h-[2px]"></div>
            <p className="text-xs mt-3">
                <span className="text-sm font-bold my-2 block">
                    Built with:
                </span>
            </p>
            <ul>
                <li className="text-xs">NextJS</li>
                <li className="text-xs">TypeScript</li>
                <li className="text-xs">TailwindCSS</li>
            </ul>
            <p className="text-sm mt-3">Hosted by Vercel</p>
        </div>
    )
}

export default InfobarAbout
