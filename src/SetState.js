import React, { useState } from "react";
import ReactDOM from "react-dom/client";
export default function Favoritegame() {
    const [game, setgame] = useState("cricket");
    return (
        <>
            <h1>My Favorate Game is {game}</h1>
            <button type="button" onClick={() => setgame('cricket')}> Cricket </button>
            <button type="button" onClick={() => setgame('football')}> Football </button> 
            
            <button type="button" onClick={() => setgame('hockey')}> Hockey </button>
        </>

    );
}

