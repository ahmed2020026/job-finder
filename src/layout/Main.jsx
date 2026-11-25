import Hero from "../section/Hero"
import Jobs from "../section/Jobs"

const Main = () => {
    return (
        <div className='container'>
            <section className="min-h-screen w-full flex flex-col justify-center items-center">
                <Hero />
            </section>
            <section className="min-h-screen pt-30 pb-15">
                <Jobs />
            </section>
        </div>
    )
}

export default Main