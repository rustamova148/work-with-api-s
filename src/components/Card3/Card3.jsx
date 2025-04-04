import React, { useRef, useState } from 'react'
import './Card3.css'

const Card3 = ({datamale,loading,error}) => {

const modal = useRef();
const [selectedMale, setSelectedMale] = useState(null);  

const showMaleDatas = (dm) => {
  modal.current.style.display = "flex";
  setSelectedMale(dm);
}

const hideMaleDatas = () => {
  setSelectedMale(null);
  modal.current.style.display = "none";
}

  return (
    <div className='card3' style={{position: "relative", display: "flex",flexWrap: "wrap",gap: "15px"}}>
        {loading ? <p>Loading...</p> :
         error ? <p style={{color: "red"}}>{error}</p> :
         (datamale?.map((dm) => (
            <button onClick={() => showMaleDatas(dm)} style={{cursor: "pointer", backgroundColor: "transparent", border: "none", width: "60px" ,height: "60px"}}>
            <img key={dm.login.uuid} width={60} height={60} src={dm.picture.large} alt="photo2" 
            style={{borderRadius: "100%"}} />
            </button>
         )))
        }
        <button onClick={hideMaleDatas} className="modalmale" ref={modal}
        style={{cursor: "pointer"}}>
            <div className="modalmalebox">
              <button onClick={hideMaleDatas} style={{width: "20px", height: "20px", 
              float: "right", cursor:"pointer"}}>X</button>
              <div className="malemodaldatas" style={{marginTop: "40px"}}>
                {selectedMale && (
                  <div>
                    <b><p>{selectedMale.name.title} {selectedMale.name.first} {selectedMale.name.last}</p></b> <br />
                    <p>Country: {selectedMale.location.country}</p>
                    <p>City: {selectedMale.location.city}</p>
                    <p>Email: {selectedMale.email}</p>
                    <p>Phone: {selectedMale.phone}</p>
                  </div>
                )}
              </div>
            </div>
          </button>
    </div>
  )
}

export default Card3