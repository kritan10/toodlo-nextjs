import FilterProvider from './taskFilter'
import TasksProvider from './tasks'
import ThemeProvider from './theme'

export default function AppContext({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            <FilterProvider>
                <TasksProvider>{children}</TasksProvider>
            </FilterProvider>
        </ThemeProvider>
    )
}
