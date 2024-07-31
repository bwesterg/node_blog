import React from 'react';
import Edit from '../img/edit-pencil.svg';
import Delete from '../img/delete.svg';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg" alt="test image" />
        <div className="user">
          <img src="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg" alt=""/>
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>      
              <img src={Edit} alt=""/>
            </Link>
            <img src={Delete} alt=""/>
          </div>
        </div>
        <h2>This is some text for the purpose of testing formatting</h2>
        <p>I think it's also worth mentioning that the demands of a cycling TT are very different than a road race. Holding a high average power for a long, steady period of time in a TT is a completely different physiological stimulus than the same high power average but with the repetitive surging that takes place in road racing. I would imagine it could take years to adapt to the stochastic and explosive nature of road racing.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
Single