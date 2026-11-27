import JobSection from "../component/JobSection"
import useApi from "../hooks/useApi"

const Jobs = () => {
    const { jobs, error, loading } = useApi()

    return (
        <div>
            <div className="mb-8">
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                    Explore Opportunities
                </span>

                <h2 className="text-3xl font-black text-dark dark:text-white mt-2 mb-3 transition-colors duration-300">
                    Latest Job Openings
                </h2>
            </div>

            {/* Loading */}
            {loading && (
                <p className="text-muted dark:text-gray-400 text-center py-8">
                    Loading jobs...
                </p>
            )}

            {/* Error */}
            {error && (
                <p className="text-red-500 dark:text-red-400 text-center py-8">
                    {error}
                </p>
            )}

            {/* Jobs */}
            {!loading && !error && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {jobs.map((job) => {
                        return <JobSection job={job} key={job.id} />
                    })}
                </div>
            )}
        </div>
    )
}

export default Jobs