import './App.css';
import Rating from './components/Rating';
import {Route, Routes} from 'react-router-dom'
import Thankyou from "./components/Thankyou";
import {useState} from "react";

function App() {

    const [rating, setRating] = useState(0)

    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<Rating rating={rating} setRating={setRating}/>}/>
                <Route exact path={'/thankyou'} element={<Thankyou rating={rating}/>}/>
            </Routes>
        </>
    );
}

export default App;
