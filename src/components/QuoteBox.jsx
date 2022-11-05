import React from 'react';
import QuoteLogo from '../images/quote-left-solid.svg';
import './QuoteBox.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';
import { getQuote } from './Quotes';
import TwitterQuote from './TwitterQuote';

function QuoteBox() {
    const color = useSelector((state) => state.color);
    const quoteObj = useSelector((state) => state.quote);

    const dispatch = useDispatch();

    const {setColor} = bindActionCreators(actionCreators, dispatch);
    const {setQuote} = bindActionCreators(actionCreators, dispatch);
    
    const colors = ['black', 'blue', 'darkblue', 'darkred', 'darkorange', 'green', 'darkgreen', 'blueviolet', 'cadetblue', 'chocolate'];

    const getColor = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    const updateQuote = () => {
        let quote = getQuote();
        setQuote(quote);
    }
    
    const quoteImage = () => {
        return(
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            fill={color}
            id='quote-image'
            style={{transition: 'all 1s ease-out'}}>
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
            </svg>
        );
    }

    let textStyle = {
        color: color,
        transition: 'all 1s ease-out'
    };
    let buttonStyle = {
        color: 'white',
        backgroundColor: color,
        border: 'none',
        transition: 'background-color 1s ease-out'
    };

    return(
        <div id="quote-box">
            <div>
                <h2 id='quote-text' style={textStyle}> {quoteImage()} {quoteObj.quote}</h2>
                <p id='quote-author' style={textStyle}>{quoteObj.author}</p>
            </div>
            <div id='quote-buttons-container'>
                <TwitterQuote/>
                <button id='quote-button' style={buttonStyle} onClick={() => {getColor(); updateQuote()}}>New quote</button>
            </div>
        </div>
    );
}


export default QuoteBox;