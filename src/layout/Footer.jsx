const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 mt-12 rounded-t-2xl">
            <div className="container mx-auto px-4">

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    <h2 className="text-xl font-bold">
                        Job<span className="text-primary">Finder</span>
                    </h2>

                    <p className="text-sm text-white/60 text-center">
                        Find your next opportunity.
                    </p>

                </div>

                <div className="border-t border-white/10 mt-5 pt-4 text-center">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} JobFinder. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;