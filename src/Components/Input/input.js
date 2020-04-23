import React from 'react';  
import './input.css';


const input = (props) => { 
	let inputElement = null;
	switch(props.elementType) {
		case 'input' : 
			inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />
			break;
		case 'select' : 
			inputElement = (
							<select onChange={props.changed}>
							  {props.elementConfig.options.map(opt => (
																	   <option key={opt.option} value={opt.option}>{opt.display}</option>
																	   ))}
							</select>
							)
			
			break;	
	    default :
			inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />
			break;
	}
return (  
	<div className="Input">  
		<label>{props.label}</label>
		{inputElement}
	</div>  
	);  
}  
  
export default input;