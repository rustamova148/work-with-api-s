import React, {useRef, useState} from 'react'
import './Card2.css'

const Card2 = ({datafem,loading,error}) => {

  const modal = useRef();
  const [selectedFmale, setSelectedFmale] = useState(null);

  const showFmaleDatas = (df) => {
    modal.current.style.display = "flex";
    setSelectedFmale(df);
  }
  
  const hideFmaleDatas = () => {
    setSelectedFmale(null);
    modal.current.style.display = "none";
  }

  return (
    <div className='card2' style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "15px"}}>
        {loading ? <p>Loading...</p> :
         error ? <p style={{color: "red"}}>{error}</p> :
         (datafem?.map((df) => (
          <button onClick={() => showFmaleDatas(df)} style={{cursor: "pointer", backgroundColor: "transparent", border: "none", width: "60px" ,height: "60px"}}>
            <img key={df.login.uuid} width={60} height={60} src={df.picture.large} alt="photo2" 
            style={{borderRadius: "100%"}} />
          </button>
         )))
        }
        <button onClick={hideFmaleDatas} className="modalfmale" ref={modal}
        style={{cursor: "pointer"}}>
            <div className="modalfmalebox" style={{backgroundColor: "#f4e285"}}>
              <button onClick={hideFmaleDatas} style={{width: "20px", height: "20px", 
              float: "right" , cursor:"pointer", backgroundColor: "#e63946", border: "none", color:"white"}}>X</button>
              <div className="fmalemodaldatas" style={{marginTop: "40px"}}>
                {selectedFmale && (
                  <div>
                    <b><p style={{fontSize: "17px"}}>{selectedFmale.name.title} {selectedFmale.name.first} {selectedFmale.name.last}</p></b> <br />
                    <p>Country: {selectedFmale.location.country}</p>
                    <p>City: {selectedFmale.location.city}</p>
                    <p>Email: {selectedFmale.email}</p>
                    <p>Phone: {selectedFmale.phone}</p>
                  </div>
                )}
              </div>
            </div>
          </button>
    </div>
  )
}

export default Card2