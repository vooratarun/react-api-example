import React, {useState, useEffect} from "react";

const App2 = ()=> {

    const [data,setData]= useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok) {
                throw new Error("network response was not ok")
            }

            const data = await response.json();
            setData(data);
            setLoading(false);

        }catch(error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);

    if(loading) {
        return <div>Loading..</div>
    }
    if(error) {
        return <div> Error: ${error.message}</div>
    }

    return (
        <div>
            <h1> Posts APP2</h1>

            <ul>
                {

                    data.map((post)=> 
                   
                    (<li key={post.id}>{post.title}</li>)

                    )
                }
            </ul>
        </div>

    )
}

export default App2;