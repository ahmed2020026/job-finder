import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Main from "./layout/Main"

const App = () => {
  return (
    <>
      <header className="shadow-lg fixed top-0 left-0 z-50 bg-white w-full">
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