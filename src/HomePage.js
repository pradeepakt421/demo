
import logo from "./logo.png"
import "./HomePage.css" 

function Home() {
    return (
        <div className="home-page-main-container">
            <img className="image" src={logo} alt="book logo..."/> 
            <h1 id="line1" >Welcome to Book World...</h1>
            <h1 id="line2">Step Into a World Where Books Come Alive</h1>
        </div>
    );
}

export default Home;
