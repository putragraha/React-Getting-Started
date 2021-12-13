const handleClick = (event) => console.log("Hello world", event)

const handleClickWithArgument = (name, event) => console.log("Hello " + name, event.target)

const Home = () => {
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <button onClick={handleClick}>Click</button>
            <button onClick={(event) => handleClickWithArgument("Vention", event)}>Click with Argument</button>
        </div>
     );
}
 
export default Home;