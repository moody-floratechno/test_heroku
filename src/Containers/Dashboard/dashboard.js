import React from 'react';
import Popup from '../../Components/Popup/popup';
import history from '../Routes/history';

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showPopup: false,
			fields: {},
			errors: {},
			productList : [
				{
					id: 1,
					name: 'Television',
					rate: 100,
					quality: 10,
				},
				{
					id: 2,
					name: 'Refrigerator',
					rate: 200,
					quality: 30
				},
			],
			popConfig : [ {name:'name', label:'Name'}, {name:'rate', label:'Rate'},{name:'quality', label:'Quality'}]
		}
	
		this.handleChange = this.handleChange.bind(this);
		this.submitProduct = this.submitProduct.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	// input change handler
	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	// remove product
	removeItem(id) {
		this.setState(prevState => ({
		productList: prevState.productList.filter(product => product.id !== id)
		}));
	}

    // submit / add new product 
	submitProduct(e) {
		e.preventDefault();
		
		this.validateForm();
		if(this.validateForm()) {
		this.displayPopup(false);
		var newObj = { id : this.state.productList.length + 1, ...this.state.fields}
		this.setState( prevState => ({
		...prevState,						
		productList: [...prevState.productList,  newObj],
		fields : {},
		errors: {}
		}));
		}
	}
	
	validateForm() {
		let errors = {};
		let formIsValid = true;
		let arr = this.state.popConfig.map(ele => {
										   return ele.name
										   })
		console.log(arr)
		for(let i = 0; i< arr.length;i++) {
   if(arr[i] in this.state.fields ) {
     console.log("p" + arr[i])
   } else { formIsValid = false; errors[arr[i]] = 'please enter' + arr[i] }
}
		/*for (var key of Object.keys(this.state.fields)) {
			if(this.state.fields[key] === '') {
				   formIsValid = false;
					errors[key] = "*Please enter " + key;
			}
		}*/
		this.setState({
			errors: errors
		});
		return formIsValid;
	}
	

    // show / hide popup
	displayPopup(show) {  
		this.setState({  
			showPopup: show  
		})
	}


	render() {
		const itemStr = localStorage.getItem('greeting');
		// if user has not come from login redirect him back to login
		if (!itemStr) {
			history.push({pathname: '/'});
		}
		return (
			<div id="main-dashboard-container">
				Hello {localStorage.getItem('greeting')}
				{this.state.showPopup ?
					<Popup text='Click "Close Button" to hide popup'  
						   closePopup={this.displayPopup.bind(this,false)}
						   changed={this.handleChange}
						   submitted={this.submitProduct}
						   fields={this.state.fields}
						   config={this.state.popConfig}
						   errors={this.state.errors}
					/>
					: null  
				}
				<div>
					<button onClick={this.displayPopup.bind(this,true)}>Add Product</button>
				</div><br/>
			
				<table border="1">
				    <thead>
						<tr>
						  <th>ID</th>
						  <th>Name</th>
						  <th>Rate</th>
						  <th>Quality</th>
						  <th></th>
						</tr>
					</thead>
					<tbody>
					{this.state.productList.map(item => (
						<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.rate}</td>
						<td>{item.quality}</td>
						<td><span onClick={() => this.removeItem(item.id)}>Delete</span></td>
					</tr>
					))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Dashboard;