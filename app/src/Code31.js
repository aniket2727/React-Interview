import { useEffect, useState } from "react";

const MainApiCallingCustomHook = ({ url }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('not');

    useEffect(() => {
        const callApiToGetData = async () => {
            try {
                const apirawresult = await fetch(url);
                const result = await apirawresult.json();
                setData(result);
            } catch (error) {
                setError('error');
                console.error("Error fetching data: ", error);
            } finally {
                setStatus('complete');
            }
        };
        callApiToGetData();
    }, [url]);

    return { data, error, status };
};

const NewCustomHook = () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const { data, error, status } = MainApiCallingCustomHook({ url });

    if (error === 'error') {
        return <div><h1>Oops something went wrong</h1></div>;
    }

    if (status !== 'complete') {
        return <div><h1>Loading.....</h1></div>;
    }

    return (
        <div>
            {data && (
                <div>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <h1>{value}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewCustomHook;
