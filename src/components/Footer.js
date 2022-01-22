import React from "react"


import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://instagram.com/caioalencikas" target="_blank">
                <img 
                    src={instagram}
                    Alt="Logo do Instagram"
                />
            </a>
            <a href="https://github.com/caioalencikas" target="_blank">
                <img 
                    src={github}
                    Alt="Logo do GitHub"
                />
            </a>
        </div>
    )
}