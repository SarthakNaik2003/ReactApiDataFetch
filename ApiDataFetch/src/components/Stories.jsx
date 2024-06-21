import React, { useEffect } from 'react'

function Stories() {
    const API = "http://hn.algolia.com/api/v1/search?query=html";

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <>
            <h2>my tech news Post</h2>
        </>
    )
}

export default Stories