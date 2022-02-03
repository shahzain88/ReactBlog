// to use costome hocks we need to say use infront of it

import { useEffect, useState } from 'react';



const useFatch = (url) => {
    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(
                (res) => {
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource")
                    }
                    return res.json(); // change json to js object
                }
            ).then(
                (data) => {
                    setData(data);
                    setIsPanding(false)
                }

            ).catch(
                (err) => {
                    if (err.name === "AbortError") {
                        console.log("Fatch Aborted ")
                    } else {
                        setError(err.message);
                        setIsPanding(false);
                    }

                }
            );
        }, 1000)

        return () => abortCont.abort();

        // dependesese is url 
        // when ever the url changes we need to run above .
    }, [url]);

    return { data, isPanding, error };
}

// to use costome hocks we need to say use infront of it

export default useFatch;