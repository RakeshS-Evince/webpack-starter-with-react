import React from 'react'
import './app.scss'
import SvgHelper from './SvgHelper'
import demoSvg from './assets/demoSvg.svg';
import profile from './assets/profile.jpg';
const App = () => {
    return (
        <div><h1>App component</h1>
            <br />
            <SvgHelper src={demoSvg} width={50} height={50} title={''} />
            <img src={profile} alt="" />
        </div>
    )
}

export default App