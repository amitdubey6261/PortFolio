import React from 'react'
import "./myself.css"
import kvs from "../../../images/kvs.png"
import kinder from "../../../images/kinder.png"
import juet from "../../../images/juetlogo.jpg"
import Myprofile from './MyProfile/Myprofile'

const Myself = () => {
    return (
        <>
        <div>
            <div className="myselfCon">
                <h1 style={{ fontSize: "6vmin" }}>About Me</h1>

                <div className="timeCon">

                    <div id="bord1" className="timeItem">
                        <div id="rb1" className="rebet"></div>
                        <div className="mainCon">
                            <div className='logo'>
                                <img src={kinder} alt="notfound" />
                            </div>
                            <div className="write">My lower kindergarten was done in Nashik Maharashtra</div>
                        </div>
                        <h3>ARSENAL ARMY NURSURY NASHIK 2005-2008 </h3>
                    </div>

                    <div id="bord2" className="timeItem">
                        <div id="rb2" className="rebet"></div>

                        <div className="mainCon">
                            <div className='logo'>
                                <img src={kvs} alt="notfound" />
                            </div>
                            <div className="write">Matriculation from Kendriya Vidyalaya No-1 Airforce Station Chakeri Kanpur .</div>
                        </div>
                        <h3>Kendriya Vidyalaya Chakeri Kanpur 2008 - 2018 </h3>

                    </div>

                    <div id="bord3" className="timeItem">
                        <div id="rb3" className="rebet"></div>
                        <div className="mainCon">
                            <div className='logo'>
                                <img src={kvs} alt="notfound" />
                            </div>
                            <div className="write">Intermediate from Kendriya Vidyalaya No-1 Airforce Station Chakeri Kanpur .</div>
                        </div>
                        <h3>Kendriya Vidyalaya Chakeri Kanpur 2018 - 2020 </h3>
                    </div>

                    <div id="bord4" className="timeItem">
                        <div id="rb4" className="rebet"></div>
                        <div className="mainCon">
                            <div className='logo'>
                                <img src={juet} alt="notfound" />
                            </div>
                            <div className="write">Intermediate from Kendriya Vidyalaya No-1 Airforce Station Chakeri Kanpur .</div>
                        </div>
                        <h3>Kendriya Vidyalaya Chakeri Kanpur 2018 - 2020 </h3>
                    </div>
                    <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}} id="bord5" className="timeItem">
                        <Myprofile/>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}

export default Myself