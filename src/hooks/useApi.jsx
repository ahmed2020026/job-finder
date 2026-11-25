import { useEffect, useState } from 'react';
import { DataJobs } from '../assets/data';

const useApi = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Later: fetch data from API
                setJobs(DataJobs);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return { jobs, loading, error };
};

export default useApi;