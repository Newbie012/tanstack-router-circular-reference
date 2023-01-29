import { RouterProvider } from "@tanstack/react-router";
import { useState } from "react";
import "./App.css";
import { router } from "./routes/_router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
