import React from 'react';
import Input from '../../Components/Input/input'

class contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contactForm : {
				name : {
						elementType:'input',
						elementConfig: {
							placeholder:'name',
							type:'text'
						},
						value:'',
						validation : {
							required : true
						}
						},
				email: { 
						elementType:'input',
						elementConfig: {
							placeholder:'email',
							type:'email'
						},
						value:'',
						validation : {
							required : true
						}
					   },
				delivery : {
					elementType: 'select',
					elementConfig: {
						options: [
								  {option:'fast', display:'Fastest'},
								  {option:'cheap', display:'Cheapest'},
						]
					},
					value: ''
				}
			}
					
		}
	}
	
	onChangeHandler = (event,element) => {
		
		const updatedForm = {
			...this.state.contactForm
		}
		
		const updatedFormElement = {
			...updatedForm[element]
		}
		updatedFormElement.value = event.target.value;
		updatedForm[element] = updatedFormElement;
		this.setState({contactForm : updatedForm});
		
	}
	
	submitForm = (event) => {
		event.preventDefault();
		const formData = {};
		for(let formElement in this.state.contactForm) {
			formData[formElement]=this.state.contactForm[formElement].value
		}
		console.log(formData);
		this.props.history.push('/Dashboard');
	}

	render() {
		const formElementsArray = [];
		for(let key in this.state.contactForm) {
			formElementsArray.push({
									id:key,
									config:this.state.contactForm[key]
								   })
		}
		return (
				<div>
				<form onSubmit={this.submitForm}>
					
					
					{
						formElementsArray.map(formElement => (
						  <Input key={formElement.id} elementType={formElement.config.elementType} 
						  		 elementConfig={formElement.config.elementConfig}
								 value={formElement.config.value}
								 changed={(event) => this.onChangeHandler(event,formElement.id)}/>
					))}
						<input type="submit" value="Click"/>
				</form>	
				</div>
				)
	}
}

export default contact;