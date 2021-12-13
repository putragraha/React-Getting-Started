import { useState } from "react";

const Home = () => {
    
    const [name, setName] = useState("Initial")

    const [age, setAge] = useState(25)

    const handleClick = (event) => {
        setName("Updated")
        setAge(30)
    }
        
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>{name} is {age} years old</p>
            <br />
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Home;