
function IdCard(props){
    return(
        <div>
            <img src={props.picture}/>
            <div>
                <span><b>First Name: </b>{props.firstName}</span>
                <span><b>Last Name: </b>{props.lastName}</span>
                <span><b>Gender: </b>{props.gender}</span>
                <span><b>Height</b>{props.height}</span>
                <p><b>Birth: </b>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;