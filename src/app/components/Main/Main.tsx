import Header from './Header'
import TasksSection from './TasksSection'

function Main() {
    return (
        <div className="w-[95%] max-h-screen overflow-scroll p-4 bg-bg">
            <Header />
            <TasksSection />
        </div>
    )
}

export default Main
