import './globals.css'
import AppContext from './providers'

export const metadata = {
    title: 'toodlo | Task Manager',
    description: 'Task management web-app',

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <AppContext>
                <body suppressHydrationWarning={true}>{children}</body>
            </AppContext>
        </html>
    )
}
