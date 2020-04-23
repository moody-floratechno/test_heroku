import React from 'react';
import Dashboard from '../Dashboard/dashboard';
import history from '../Routes/history';
import './login.css';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {},
			errors: {}
		}
	
		this.handleChange = this.handleChange.bind(this);
		this.submituserLoginForm = this.submituserLoginForm.bind(this);
	};
	
	// input changes handled
	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}
	
	// submit form
	submituserLoginForm(e) {
		e.preventDefault();
		if (this.validateForm()) {
			if(this.state.fields.emailid === 'Clarion@clarion.com' && this.state.fields.password === 'Clarion123') {
				let email = this.state.fields.emailid;
				let greeting = email.split("@")[0];
				localStorage.setItem('greeting', greeting);
				history.push({pathname: '/Dashboard'});
			}
		}
	}
	
	// validations
	validateForm() {
	
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;
		
		if (!fields["emailid"]) {
			formIsValid = false;
			errors["emailid"] = "*Please enter your email-ID.";
		}
		
		if (typeof fields["emailid"] !== "undefined") {
			//regular expression for email validation
			var pattern = new RegExp(/[^@]+@[^\.]+\..+/g);
			if (!pattern.test(fields["emailid"])) {
				formIsValid = false;
				errors["emailid"] = "*Please enter valid email-ID.";
			}
		}
		
		if (!fields["password"]) {
			formIsValid = false;
			errors["password"] = "*Please enter your password.";
		}
		
		if (typeof fields["password"] !== "undefined") {
			if (!fields["password"].match(/\w*[A-Z]\w*/g)) {
				formIsValid = false;
				errors["password"] = "*Please enter proper password.";
			}
		}
		
		this.setState({
			errors: errors
		});
		
		return formIsValid;
	}

	render() {
		return (
			<div id="main-login-container">
				<div id="login">
					<h3>Login</h3>
					<form method="post"  name="userLoginForm"  onSubmit= {this.submituserLoginForm} >
						<label>Email ID:</label>
						<input type="text" name="emailid" value={this.state.fields.emailid || ''} onChange={this.handleChange}  />
						<div className="errorMsg">{this.state.errors.emailid}</div>
						<label>Password</label>
						<input type="password" name="password" value={this.state.fields.password || ''} onChange={this.handleChange} />
						<div className="errorMsg">{this.state.errors.password}</div>
						<input type="submit" className="button"  value="Login"/>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;