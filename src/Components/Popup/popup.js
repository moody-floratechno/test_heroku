import React from 'react';  
import './popup.css';  
import '../../Containers/Login/login.css';

function Popup (props){ 

return (  
	<div className='popup'>  
		<div className='popup\_inner'>  
			<div id="container">
        		<h3>Add Product</h3>
				<form method="post"  onSubmit= {props.submitted} >
				{ props.config.map(item => {
					return(
						 <React.Fragment key={item.name}>
							<label><b>{item.label}:</b></label>
							<input type="text" name={item.name} onChange={(e) => props.changed(e)}  /><br/>
							<div className="errorMsg">{props.errors[item.name]}</div>
						 </React.Fragment>
					)})
				}
        		<br/>
        		<input type="submit" className="button"  value="Add"/>&nbsp;<input type="button" className="button"  value="Cancel" onClick={props.closePopup}/>  
        		</form>
    		</div>  
		</div>  
	</div>  
	);  
}  
  
export default Popup;