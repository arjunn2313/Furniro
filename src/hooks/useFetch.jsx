// import { useState, useEffect } from 'react';

// const useFetch = (apiCall) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await apiCall();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiCall]);

//   return { data, loading, error };
// };

// export default useFetch;

import { useState, useEffect } from 'react';

const useFetch = (apiCall, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(options); // Add params state for pagination and filtering

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall(params.page, params.limit, params.filters);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiCall, params]);

  // Expose a method to update the params
  const updateParams = (newParams) => {
    setParams((prev) => ({
      ...prev,
      ...newParams,
    }));
  };

  return { data, loading, error, updateParams };
};

export default useFetch; 