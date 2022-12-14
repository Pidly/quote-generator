import './App.css'
import QuoteBox from './components/QuoteBox';
import { useSelector } from "react-redux";

function App() {
    const color = useSelector((state) => state.color);

    let containerStyle = {
        backgroundColor: color,
        transition: 'all 1s ease-out'
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