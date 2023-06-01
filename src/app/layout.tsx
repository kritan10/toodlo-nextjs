import './globals.css'
import AppContext from './providers'
import { Work_Sans } from 'next/font/google'

export const metadata = {
    title: 'toodlo | Task Manager',
    description: 'Task management web-app',
}

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <AppContext>
                <body className={`${workSans.variable} font-sans`}>{children}</body>
            </AppContext>
        </html>
    )
}
