
import { Header } from './_components/header'

function RootLayout({children}) {
  return (
    <div className='container mt-5'>
        <Header />
        <main>
          {children}
        </main>
    </div>
  )
}

export default RootLayout
