import React from "react";
import ReactDOM from 'react-dom/client'
import App from './composants/App.jsx'

function Afficher(){
    return(
        <App />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Afficher/>)