import React from "react";
const Button = ({color, text, onClick}) => {
    return(
        <div>
        <button className='btn btn-add' 
                style={{backgroundColor:color}}
                onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button