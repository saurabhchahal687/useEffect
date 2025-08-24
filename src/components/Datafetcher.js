import React, {useState, useEffect} from 'react'

function DataFetcher(){
    const [data, setData] =useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>{
            setData(data);
            setloading(false);
        });
    }, []);
    // it will run on first render

    console.log('data', data);
       return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {/* <li>here i am</li> */}
                    {data && data.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default DataFetcher