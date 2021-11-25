import React from "react"
import ReactDom from "react-dom"
import Search from "./Search"

import "./index.css"

const second =[
    {
        url:"https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL200_SR200,200_.jpg",
        name:"yaswanth"
    },
    {
        url:"https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg",
        name:"Abhinai"
    },
]


function Greeting(){
    return(
        <div className="Book-List">
            <Search />
            <br/>
            <br/>
            {second.map((book) =>{
                return <Book book={book}/>
            })}            
        </div>
    )
}


const Book = (props) =>{
    const {url,name} = props.book
    return(
        <section className="Book">
           <Img url={url}/>
           <Author name={name}/>
        </section>
    )
}


const Img = (props) =>{
    return(
        <img src={props.url} alt=""/>
        )
}

const Author = (props) =>{
    return(
        <h1>
            The Author is {props.name}
        </h1>
    )
}

ReactDom.render(<Greeting/>,document.getElementById('root'))