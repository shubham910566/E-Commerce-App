import { useState, useEffect } from "react";

function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("API Response:", result); // Debug log
            setData(result.products || []);
            setLoading(false);
        } catch (err) {
            setError(`Not able to fetch data: ${err.message}`);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, loading, error };
}

export default useFetchData;