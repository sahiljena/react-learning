import React from 'react'
import ReactDOM from 'react-dom';

//css
import './index.css'

//books
import {books} from './books';

//book 
import Book from './Book';


const BookList = () =>{
  return(
    <section className="booklist">
      {
      books.map((book) =>{
        const {img,title,author} = book;
        return(
          <Book key={book.id} {...book}/>
        );
      }
      )}
    </section>
    );
}






ReactDOM.render(<BookList />, document.getElementById('root'));