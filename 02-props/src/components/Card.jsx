function Card(props) {
    return (
       <div className="card">
        <img src={props.img} alt='images'/>
        <h1>{props.user} , {props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</p>
        <button>View Profile</button>
      </div>
    )
}
export default Card