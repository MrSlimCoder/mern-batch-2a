import { Link } from "react-router-dom";

function App() {
    return (
    <div>
        <h1>Todo App</h1>

        <h2>Routes</h2>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/signup">Signup</Link>
    </div>
    )
}

export default App;