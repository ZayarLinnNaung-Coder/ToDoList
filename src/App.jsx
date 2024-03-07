import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./components/router/Router";

function App() {
    return (
        <BrowserRouter>
            <div className="h-screen flex items-center">
                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/category">Category</Link>*/}
                {/*<Link to="/task">Task</Link>*/}

                <div className="w-[500px] mx-auto">
                    <Router />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
