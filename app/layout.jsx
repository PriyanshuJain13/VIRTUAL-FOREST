import '@styles/globals.css'
import Header from '@components/Header'

export const metadata = {
    title: "VirtualForest",
    description: 'A web based game'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <main>
                <Header />
                {children}
            </main>
        </body>
    </html>
  ) 
}

export default Rootlayout