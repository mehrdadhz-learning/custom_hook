import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchData = () => {

  // fetch the data from the api using the custom fetch function
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');

  // show the data to the output terminal as well 
  console.log(data);

  return (
    <>
      <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>

        {/* go over the list of values retrieved and show the results in the front end*/}
        {data && data.map((data_value, index) => (

          <>
            {/* for each of the elements in the list, we want to show the list of information about that item*/}
            <li key={index} className='list_data'>

              <h3>{data_value.name}</h3>
              <p><strong>Importance : </strong> {data_value.importance}</p>
              <p><strong>Benefits : </strong> {data_value.benefits}</p>
              <p><strong>Time to eat : </strong> {data_value.best_time_to_intake}</p>
            </li>
          </>

        ))}
      </ul>
    </>
  )
}

export default FetchData