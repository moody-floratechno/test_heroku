import React from 'react';
import Input from '../../Components/Input/input'

class contact1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contactForm : {
				name : {
					elementType: 'input',
					elementConfig: {
						placeholder: 'Enter Name',
						type: 'input'
					},
					value: ''
				},
				email : {
					elementType: 'input',
					elementConfig: {
						placeholder: 'Enter email',
						type: 'email'
					},
					value: ''
				},
				delivery : {
					elementType: 'select',
					elementConfig: {
						options: [
								  {option:'fast', display:'Fastest'},
								  {option:'cheap', display:'Cheapest'},
						],
						
					},
					value: ''
				}
			}
					
		}
	}
	
	onChangeHandler = (event,element) => {
		console.log(event.target.value,element);
		const updatedForm = {
			     ...this.state.contactForm
		}
		
		const updatedElement = {
			...updatedForm[element]
		}
		
		updatedElement.value = event.target.value;
		updatedForm[element] = updatedElement;
		this.setState({contactForm:updatedForm})
			
	}
	
	submitHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for(let ele in this.state.contactForm) {
		   formData[ele] = this.state.contactForm[ele].value	
		}
		//console.log(formData)
		
	}
	
	render() {
	  let contactArray = [];
	  for(let key in this.state.contactForm) {
		contactArray.push({
						    id: key,
							config: this.state.contactForm[key]
						  })
	  }
	  return(
			 <div>
			  <form onSubmit={this.submitHandler}>
			  { contactArray.map(ele => (
								 <Input 
								 		key={ele.id}
										elementType={ele.config.elementType} 
										elementConfig={ele.config.elementConfig}
										value={ele.config.value} 
										changed={(event) => this.onChangeHandler(event,ele.id)}
										/> 
								 ))
			  		
			  }
			  <input type="submit" value="Submit"/>
			  </form>
			 </div>
			 )
		
	}
	
	
}

export default contact1;