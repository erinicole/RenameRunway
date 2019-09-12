import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            month: '',
            day: '',
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
        console.log('im in the handle submit')
        this.props.processForm(user)
    }

    renderErrors(){
        return( 
            <ul className ='render-errors'>
                {this.props.errors.map((error, i) =>
                <li key={`error-${i}`}>
                    {error}
                </li>  
                    )}
            </ul>
        )
    }

    signUpBirthday(){
        return(
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
        )
    }

    demoUser() {
        const demoUser = { email: 'rrr', password: '123456' }
        return (
            <button className="demo-user" onClick={(e) => {
                e.preventDefault()
                return this.props.processForm(demoUser)
            }}>Demo User</button>
        )
    }

    render(){
        console.log(this.props.end)
            return(
                <div>
                    { <h3>{this.props.headerText}</h3>}
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        {this.renderErrors()}
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
                            {this.props.formType === 'joinnow' ? this.signUpBirthday() : null}
                            <input type='submit' value={this.props.buttonText}/>
                            {this.demoUser() }
                            <h3>{this.props.endLink}</h3>
                        </div>
                    </form>
                </div>
            )
    }
}
export default SessionForm;