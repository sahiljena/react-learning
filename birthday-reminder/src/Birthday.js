import React from 'react';

const Birthday = (props) => {
        return(
            <article className="card">
                <img className="avatar-img" src={props.img} />
                <div className="text-part">
                    <h3>{props.name}</h3>
                    <p>{props.age} Years</p>
                </div>
                <button className="btn-small-trans-circle" onClick={props.click}>
                    <span className="material-icons">delete</span>
                </button>
            </article>
        );
    }

export default Birthday