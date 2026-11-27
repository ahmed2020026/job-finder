import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Main from "./layout/MainSection"

const App = () => {
  return (
    <>
      <header className="shadow-lg fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App