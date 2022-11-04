import QuoteLogo from '../images/quote-left-solid.svg';
import './QuoteBox.css';

function QuoteBox() {

    const quoteImage = () => {
        return(
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            fill="red"
            id='quote-image'>
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
            </svg>
        );
    }

    const twitterImage = () => {
        return(
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            fill="red"
            id='twitter-image'>
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/>
            </svg>
        );
    }
    //<img src={QuoteLogo} alt="Quote Logo" id="quote-image"/>
    let textStyle = {
        color: 'red',
    };
    let buttonStyle = {
        color: 'white',
        backgroundColor: 'red',
        border: 'none'
    };

    return(
        <div id="quote-box">
            <h2 id='quote-text' style={textStyle}>{quoteImage()} You can never cross the ocean until you have the courage to lose sight of the shore.</h2>
            <p id='quote-author' style={textStyle}>- Christopher Columbus</p>
            {twitterImage()}
            <button id='quote-button' style={buttonStyle}>New quote</button>
        </div>
    );
}

export default QuoteBox;