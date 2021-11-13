import React from 'react'

const Book = (props) => {
    const { img, title,author, description} = props;

    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
    };

    const clickHandlerComp = (author) =>{
        console.log(author);
    };


    return (
        <article className="book" onMouseOver={
        () =>{
            console.log(title);
        }
        }>
        <img src={img} />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{description}</p>
        <button type="button" onClick={clickHandler}>Alert</button>
        <button type="button" onClick={()=>clickHandlerComp(author)}>Log author</button>
        </article>
    );
}
export default Book