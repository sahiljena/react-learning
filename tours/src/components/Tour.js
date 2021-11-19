import React,{useState} from 'react';

// {
//     tours.map((data)=>{
//         const {id,name,info,image,price} = data; 
//         return(
//         <div key={id}>
//             <h2>{name}</h2>
//             <p>{info}</p>
//             <img src={image} />
//             <p><ul>{price}</ul></p>
//         </div>
//         );
//     })
// }
const Tour = ({id,name,info,image,price,removeTour}) =>{
    const [readMore, setReadMore] = useState(false);
    return(
        <div className="tour">
            <h2>{name}</h2><br />
            <p>
                {readMore ? info : `${info.substring(0,200)}...`}
                <button className="link-like-btn" onClick={()=>setReadMore(!readMore)}>
                    {readMore ? ' show less': 'Read More'}
                </button>
            </p><br />
            <img src={image} /><br />
            <p className="price">$ {price}</p><br />
            <button className="block-btn-inerveted-primary" onClick={()=>removeTour(id)}>Not Intrested</button><br />
        </div>
    );
}
const Tours = ({ tours,removeTour }) =>{
    return(
        <div className="tourContainer">
            {
                tours.map((data)=>{
                    return <Tour key={data.id} {...data} removeTour={removeTour} />
                })
            }
        </div>
    );
}
export default Tours