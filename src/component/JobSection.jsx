import { useState } from "react";
import { Banknote, BriefcaseBusiness, MapPin, X } from "lucide-react";
import Send from "./send.svg";
import eye from "./eye.svg";

const JobSection = ({ job }) => {
    const [showDetails, setShowDetails] = useState(false);

    const getTimeAgo = (date) => {
        const diff = Date.now() - new Date(date).getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return "Today";
        if (days === 1) return "Yesterday";

        return `${days} days ago`;
    };

    return (
        <>
            {/* Job Card */}
            <div className="shadow-lg bg-white dark:bg-gray-800 border-t border-muted/20 p-3 rounded-md transition-colors duration-200">
                <h3 className="font-semibold text-lg text-dark/80 dark:text-white">
                    {job.title}
                </h3>

                <div className="my-2.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] items-center gap-2.5">
                    <div className="text-sm flex justify-start items-center text-muted gap-1.5">
                        <span className="shrink-0">
                            <MapPin size={18} />
                        </span>
                        {job.location}
                    </div>

                    <div className="text-sm flex justify-start items-center text-muted gap-1.5">
                        <span className="shrink-0">
                            <BriefcaseBusiness size={18} />
                        </span>
                        {job.experience}
                    </div>

                    <div className="text-sm flex justify-start items-center text-muted gap-1.5">
                        <span className="shrink-0">
                            <Banknote size={18} />
                        </span>
                        {job.salary}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center border-t border-muted/30 pt-3 mt-3">
                    <p className="text-muted text-sm">
                        Posted {getTimeAgo(job.createdAt)}
                    </p>

                    <div className="flex justify-center items-center gap-2.5">
                        {/* View Button */}
                        <button
                            onClick={() => setShowDetails(true)}
                            className="py-1.5 text-primary border border-primary bg-white dark:bg-gray-800 text-sm flex justify-center items-center gap-1.5 px-3 rounded-md cursor-pointer hover:bg-primary/5 dark:hover:bg-primary/10 transition"
                        >
                            <img
                                src={eye}
                                alt="View"
                                className="w-4 h-4"
                            />
                            View
                        </button>

                        {/* Apply Button */}
                        <button
                            className="bg-primary py-1.5 text-white text-sm flex justify-center items-center gap-1.5 px-3 rounded-md cursor-pointer hover:opacity-90 transition"
                        >
                            <img
                                src={Send}
                                alt="Apply"
                                className="w-4 h-4"
                            />
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Job Details Popup */}
            {showDetails && (
                <div
                    onClick={() => setShowDetails(false)}
                    className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl p-5 shadow-xl max-h-[90vh] overflow-y-auto transition-colors duration-200"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start gap-3 border-b border-muted/20 pb-3">
                            <div>
                                <h2 className="text-xl font-bold text-dark dark:text-white">
                                    {job.title}
                                </h2>

                                <p className="text-sm text-muted mt-1">
                                    Posted {getTimeAgo(job.createdAt)}
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowDetails(false)}
                                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-dark dark:text-white cursor-pointer transition"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Job Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <MapPin size={18} />
                                {job.location}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted">
                                <BriefcaseBusiness size={18} />
                                {job.experience}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted">
                                <Banknote size={18} />
                                {job.salary}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <h3 className="font-semibold text-dark dark:text-white mb-2">
                                Job Description
                            </h3>

                            <p className="text-sm text-muted leading-7">
                                {job.description}
                            </p>
                        </div>

                        {/* Requirements */}
                        <div className="mb-4">
                            <h3 className="font-semibold text-dark dark:text-white mb-2">
                                Requirements
                            </h3>

                            <ul className="list-disc list-inside text-sm text-muted space-y-2">
                                {job.requirements?.map((requirement, index) => (
                                    <li key={index}>
                                        {requirement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Apply Button */}
                        <button
                            className="w-full bg-primary text-white py-2 text-sm rounded-md flex justify-center items-center gap-2 cursor-pointer hover:opacity-90 transition"
                        >
                            <img
                                src={Send}
                                alt=""
                                className="w-4 h-4"
                            />
                            Apply Now
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default JobSection;