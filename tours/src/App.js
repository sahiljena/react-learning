import React, {useState,useEffect} from 'react';
import Loading from './components/Loader';
import Tours from './components/Tour';
const url = 'https://course-api.com/react-tours-project'
function App(){

    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([]);


    const fetchTours = async () =>{
        setLoading(true)
        try{
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch(error){
            setLoading(false)
            console.log("Error Occured");
            console.log(error);
        }
    }

    const removeTour = (id) =>{
        const newTours = tours.filter((tour)=>tour.id !== id)
        setTours(newTours)
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if(loading){
        return(
            <div className="container">
                <Loading />
            </div>
        );
    }
    if(tours.length === 0){
        return(
        <div className="container">
            <nav className="navbar">
                <h1>No More Tours</h1>
            </nav>
            <div className="tourContainer">
                <button className="block-btn-primary" onClick={()=>fetchTours()}>Refresh</button>
            </div>
            
        </div>
        );
    }
    return (
        <div className="container">
            <nav className="navbar">
                <h1>Tours</h1>
            </nav>
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    );

}
export default App