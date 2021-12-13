const Navbar = () => {
    const dynamicStyle = {
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "8px"
    }

    return ( 
        <nav className="navbar">
            <h1>The Klaz Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={ dynamicStyle }>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;