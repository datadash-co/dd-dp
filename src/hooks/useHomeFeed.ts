import { useState } from 'react';


export const useHomeFeed = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchData = async () => {
        
    }

    const paginate = async () => {

    }

    useEffect(() => {
        fetchData()
    }, [])


    return {
        loading,
        data,
        error,
        paginate
    }
}