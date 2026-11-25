import JobSection from "../component/JobSection"
import useApi from "../hooks/useApi"

const Jobs = () => {
    const {jobs , error , loading} = useApi()
    return (
        <div>
            <div className="mb-8">
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                    Explore Opportunities
                </span>

                <h2 className="text-3xl font-black text-dark mt-2 mb-3">
                    Latest Job Openings
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {jobs.map((job) => {
                    return <JobSection job={job} key={job.id} />
                })}
            </div>
        </div>
    )
}

export default Jobs