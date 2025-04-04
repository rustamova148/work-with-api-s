import React from 'react'
import './Card1.css'

const Card1 = ({data,loading,error,fetchData}) => {
    
return (
    <div className='card1'>
        {loading ? <p>Loading...</p> : 
        error ? <p style={{color: "red"}}>{error}</p> : 
        (data?.map((d) => (
            <div key={d.id.value}>
              <img src={d.picture.large} alt="userphoto" 
              style={{borderRadius: "50%", marginBottom: "15px"}}
              className={(d.gender === "male") ? "borderblue" : "borderpink"} />
              <b><p>{d.name.title} {d.name.first} {d.name.last}</p></b> <br />
              <p>Country: {d.location.country}</p>
              <p>City: {d.location.city}</p>
              <p>Email: {d.email}</p>
              <p>Phone: {d.phone}</p> <br />
            </div> 
        )))}
        {loading || error ? '' : <button onClick={fetchData} className='generatebtn'><b>Generate</b></button> }
    </div>
  )
}

export default Card1