import {React, useState} from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import PreviewArea from "./Components/PreviewArea/PreviewArea";

function App() {
    const [data, setData] = useState({
        title: "",
        info: "",
        price: "",
        promo: "",
    });

    return (
        <div className="App">
            <main className="main-container">
                <Header />
                <Form data={data} setData={setData} />
                <PreviewArea data={data} setData={setData} />
            </main>
        </div>
    );
}

export default App;
