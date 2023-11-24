import React from 'react'
import './app.scss'
import SvgHelper from './SvgHelper'
import demoSvg from './assets/demoSvg.svg';
import profile from './assets/profile.jpg';
import Demo from './Demo.jsx'
const App = () => {
    return (
        <div><h1>App component</h1>
            <br />
            <SvgHelper src={demoSvg} width={50} height={50} title={''} />
            <img src={profile} alt="" />
            {process.env.BASE_URL}
            <Demo />
        </div>
    )
}

export default App