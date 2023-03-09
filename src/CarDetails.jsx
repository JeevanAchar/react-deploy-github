import React from 'react'

const CarDetails = (props) => {
    console.log(props);
  return (
    <div className="mainDiv">
      <div id="mainBlock">
        <h3>{props.details[0].carModleName}</h3>
        <h3>{props.details[0].carColor}</h3>
        <h3>{props.details[0].carCompany}</h3>
        <h4>{props.details[0].carType}</h4>
        <img src={props.details[0].carImage} alt="" />
        {/* <h4>{props.details[0].carComponents}</h4> */}
        </div>
    </div>
  )
}

export default CarDetails