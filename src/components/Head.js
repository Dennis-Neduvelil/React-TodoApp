import React from 'react'
import "./Head.css";
import {Link} from 'react-router-dom'

export default function Head() {
    return (
        <div>
        <div className="headdiv">
                <Link to="/">Class</Link>
                <Link to="/function">Function</Link>
                <Link to="/about">About</Link>
        </div>
       
        </div>
    )
}
