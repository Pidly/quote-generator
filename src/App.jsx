import './App.css'
import QuoteBox from './components/QuoteBox';

function App() {
    let containerStyle = {
        backgroundColor: 'red'
    }
    return (
        <div id="main-container" style={containerStyle}>
            <div id='quote-box-container'>
                <QuoteBox/>
            </div>
        </div>
    )
}

export default App;