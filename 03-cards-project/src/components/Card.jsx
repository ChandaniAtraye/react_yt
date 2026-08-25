import React from 'react'

const Card = (props) => {
  return (
     <div className="card">
        <div className="center">
          <div className="top">
            <img src={props.companyLogo} />
            <button>Save <i className='ri-bookmark-line'></i></button>
          </div>

          <div className="middle">
            <h4>{props.company} <span>{props.timeline}</span></h4>
            <h3>{props.post}</h3>
            <div className="expe">
              <button>{props.tag1}</button>
              <button>{props.tag2}</button>
            </div>
          </div>
        </div>

        <div className="footer">
          <h4>{props.salary} <br /><span>{props.location}</span></h4>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card