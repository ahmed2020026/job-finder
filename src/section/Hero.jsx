const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-dark tracking-tight leading-tight mb-5">
                Find Your Dream Job <span className='text-primary'>Today.</span>
            </h2>

            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
                Discover thousands of opportunities across different industries. <br />
                Find the right role, connect with top companies, and take the next
                step in your career.
            </p>
        </div>
    )
}

export default Hero