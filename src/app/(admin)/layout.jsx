
import '../globals.css'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'
import DashboardNav from '@/components/DashboardNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'BooksForAll',
    description: 'Creado por 2 monos',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <DashboardNav/>
                <StoreProvider>
                    <div className='p-10'>
                        {children}
                    </div>
                </StoreProvider>
                <script src='chart.js' async></script>
            </body>
        </html>
    )
}
