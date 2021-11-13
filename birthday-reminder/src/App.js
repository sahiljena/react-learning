import React, {useState} from 'react';
import Birthday from './Birthday';
import {data} from './birthDayData';

function App() {
    const [birthdays, setBirthdays] = useState(data);

    const removeAll = () =>{
        setBirthdays([]);
    }
    const removeItem = (id) =>{
        let newBirthdays = birthdays.filter((person)=> person.id !== id);
        setBirthdays(newBirthdays);
    }

    return (
        <div className='container'>
            <section className="card-container-400-md">
                <h2>{birthdays.length} Birthdays Today</h2><br />
                {
                    birthdays.map(
                        (birthdaydata) =>{
                            return <Birthday click={()=>removeItem(birthdaydata.id)} key={birthdaydata.id} {...birthdaydata} /> ;
                        }
                    )
                }
            <br />
            <button className="btn-block" onClick={removeAll}>Remove All</button>
            </section>
        </div>
    );
}

export default App