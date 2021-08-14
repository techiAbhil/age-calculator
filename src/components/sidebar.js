import React, { useContext } from 'react';
import AppContext from '../app-context';
import CakeImg from "../assets/cake.png";

const Sidebar = () => {
    const {state: {error, ageDiffMsg, isAgeCalculated}} = useContext(AppContext);
    return (
        <div className="sidebar">
        <div className="sidebar-content">
          <img alt="" src={CakeImg} />
          {!isAgeCalculated ? <p>
            Calculate your age🕑, find out how old are you in terms of year, month and days!
          </p>: 
          <p>{error ? error: ageDiffMsg}</p>
          }
        </div>
      </div>
    )
}

export default Sidebar;
