import { useState,useEffect } from 'react'
import './App.css'
import Card1 from './components/Card1/Card1'
import Card2 from './components/Card2/Card2'
import Card3 from './components/Card3/Card3'
import axios from 'axios'

function App() {
const [data,setData] = useState([]);
const [datafem,setDatafem] = useState([]);
const [datamale, setDatamale] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchData = async () => {
    try {
        const response = await axios.get("https://randomuser.me/api/");
        setData(response.data.results);
    } catch (error) {
        setError("An error occured!");
        console.error("Error:", error);
    } finally {
        setLoading(false);
    }
}
const fetchData2 = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response2 = await axios.get("https://randomuser.me/api/?results=5000");
        let femaleUsers = response2.data.results.filter(user => user.gender === "female").slice(0,20);
        setDatafem(femaleUsers);
        let maleUsers = response2.data.results.filter(user => user.gender === "male").slice(0,20);
        console.log(maleUsers);
        setDatamale(maleUsers);
    }catch(error) {
        console.error("Error:", error);
        setError("An error occured!");
    }finally{
        setLoading(false);
    }
}

useEffect(() => {
  fetchData();
  fetchData2();
},[])

  return (
    <div className='app'>
      <Card1 data={data} loading={loading} error={error} fetchData={fetchData} />
      <div className='secondpcards'>
        <Card2 datafem={datafem} loading={loading} error={error} fetchData2={fetchData2} /> 
        <Card3 datamale={datamale} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default App
