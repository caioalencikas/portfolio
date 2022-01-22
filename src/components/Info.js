import React from "react"

import foto from "../images/foto.png"
import email from "../images/email1.svg"
import linkedin2 from "../images/linkedin3.png"

export default function Info() {
    return (
        <div className="info">
            <img 
                src={foto}
                Alt="Foto do Caio Alencikas"
                className="info--my-photo"
            />
            <div className="info--text">
                <h1>Caio Alencikas</h1>
                <h2>Data Analyst</h2>
                <h4>BTG Pactual</h4>
                <div className="info--buttons">
                    <a href="mailto: caio.alencikas@gmail.com" target="_blank">
                        <div className="info--email">
                            <img 
                                src={email}
                                Alt="Símbolo de email"
                            />
                            <h3>Email</h3>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/caioalencikas" target="_blank">
                        <div className="info--linkedin">
                            <img 
                                src={linkedin2}
                                Alt="Logo do Linkedin"
                            />
                            <h3>LinkedIn</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}