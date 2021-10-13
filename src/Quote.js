import "./App.css"
import React, {useState, useEffect } from 'react'


const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        setIsLoad(false)
        setTimeout(() => {    
            getQuote()
          }, 2000);    
    }, []);

    const getQuote = async () => {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        console.log(data.content);
        console.log(data.author);
        const randQuote = data.content;
        const randAuthor = data.author;


        setQuote(randQuote);
        setAuthor(randAuthor);
        setIsLoad(true)
    };

    const handleClick = () =>{
        setIsLoad(false)
        setTimeout(() => {       
            getQuote()
          }, 2000);
    }
    
    return ( <div>
        {isLoad ? 
            <div className="midSection">
            <h2 className="quote">"{quote}"</h2>
            <h4 className="auth">~{author}</h4>
            <button className="click" 
            onClick={handleClick}>
                Next
            </button>
        </div>
         : (
             <div className="loding">
            <div id="loader">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        </div>
        )}
        </div>
             
    );
}

export default Quote