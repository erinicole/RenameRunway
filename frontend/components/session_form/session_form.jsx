import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            month: '',
            date: '',
            year: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => this.setState(
            {[field]: e.target.value}
        )
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    render(){
        if (this.props.formType === 'signin') {
            return(
                <div>
                    <h3>Sign in for a better experience</h3>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="login-form"> 
                            <label> EMAIL ADDRESS
                                <input 
                                    type='text' 
                                    value={this.state.email} 
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label> PASSWORD
                                <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <input type='submit' value='Sign In'/>
                            <h3>{this.props.switchLink}</h3>
                        </div>
                    </form>
                </div>
            )} else {
            return (
            <div>
                <h3>Buy Less. Wear More. 20% Off or $80 Off Unlimited Trial</h3>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <label> EMAIL ADDRESS
                                <input
                                type='text'
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <label> PASSWORD
                                <input
                                type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <label> BIRTHDAY
                                <input
                                type='text'
                                value={this.state.month}
                                onChange={this.update('month')}  
                            />
                            <input
                                type='text'
                                value={this.state.day}
                                onChange={this.update('day')}
                            />
                            <input
                                type='text'
                                value={this.state.year}
                                onChange={this.update('year')}
                            />
                        </label>
                        <input type='submit' value='Sign In' />
                    </div>
                    <h3>{this.props.switchLink}</h3>
                </form>
            </div>
            )}
    }
}
export default SessionForm;