import React, { useState, useEffect } from 'react';

const withAPICall = (WrappedComponent, apiUrl) => {
  return () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [apiUrl]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return <WrappedComponent data={data} />;
  };
};

export default withAPICall;
