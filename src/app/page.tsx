import Infobar from './components/Infobar/Infobar'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
    return (
        <div className="flex h-screen">
            <Navbar />
            <Main />
            <Infobar />
        </div>
    )
}
