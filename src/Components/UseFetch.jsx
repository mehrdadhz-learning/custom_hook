import { useEffect, useState } from "react";


// this function will call the api in order to get the data 
// from the passed url and return the result 
const UseFetch = (url) => {

    // we will consider that the data will be fetched through the API and 
    // stored in the data variable
    const [data, setData] = useState();

    // we can use this function in order to request and process the data from the API 
    // and change the content of the data variable
    useEffect(() => { fetch(url).then((res) => res.json()).then((data) => setData(data)) }, [])

    return [data];
}

export default UseFetch
