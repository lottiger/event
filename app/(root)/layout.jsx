
import { Header } from './_components/header'

function RootLayout({children}) {
  return (
    <div >
        <Header />
        <main className='container mt-5'>
          {children}
        </main>
    </div>
  )
}

export default RootLayout
