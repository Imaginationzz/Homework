import React, { Component } from 'react'

import SingleBook from "./SingleBook";





 class BookList extends Component {
    
    constructor(props){
        super(props)
    
        this.state = {
          books: this.props.books.Fantasy.slice(0,1)      
        }
      }



    render() {
        console.log(this.state.books)
        return (
            this.state.books.map(book => <SingleBook key={book.asin} cover={book.img} title={book.title}  /> )
        )
    }
}

export default  BookList 