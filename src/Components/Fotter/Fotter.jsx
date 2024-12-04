import React from 'react'
import "./FotterStyles.css";
import { Link } from 'react-router-dom';

const Fotter = () => {
  return (
    <section id='contact' className="fotter">
      <div className="row justify-content-between">
        <div className="left col-6 flexColStart text-center">
          <span className='primaryText'>HomeZ</span>
          <span className='secondaryText'>subscripe and find attractive price qoutes from us</span>
        </div>
        <div className="right col-6 flexColStart text-center">
          <span className='primaryText'>information</span>
          <span className='secondaryText'>145 new york</span>
          <ul className="list-items mt-2 d-flex justify-content-start
           align-items-center nav">
            <li className="nav-item pe-3">property</li>
            <li className="nav-item pe-3">services</li>
            <li className="nav-item pe-3">products</li>
            <li className="nav-item pe-3">about us</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>all rights reserved &copy; copyright khaled hamdy</p>
      </div>
    </section>
  )
}

export default Fotter