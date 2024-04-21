import React from 'react'
import { FaSun } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import { GiDrippingStar } from "react-icons/gi";
import './style.scss'

const App:React.FC = () => {

  const [mode, setMode] = React.useState<boolean>(false);

  const toggleSwitch = () => {
    setMode((prevMode) => !prevMode);
  }

  return (
    <div className='app' style={{background: mode ? 'mediumslateblue' : "#303030"}}>

        <div className="toggle-switch-btn" onClick={toggleSwitch}
        style={{background: mode ? '#303030' : ''}}
        >
          <FaSun className={`sun ${mode ? 'sun-deactive' : ''}`} />
          <LuMoonStar className={`moon ${mode ? '' : 'moon-deactive'}`}/>
          {mode ? (
          <GiDrippingStar className='star'/>
          ) : ""}
        </div>

    </div>
  )
}

export default App