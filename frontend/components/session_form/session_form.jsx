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
        this.props.processForm(user).then(this.props.closeModal);
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

    signInNormal(){
        return(
            <label className='session-label'> PASSWORD
                    <input className='session-input'
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                />
            </label>
        )
    }

    signUpBirthday(){
        return(
            
            <div className='session-bday-label'>
                <label > CREATE A PASSWORD
                                <input id='bday-password-input'
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <label > BIRTHDAY
                                    <input id='bday-box-input'
                        type='text'
                        value={this.state.month}
                        onChange={this.update('month')}
                    />
                </label> 
                <label > 
                    <input id='bday-box-input'
                        type='text'
                        value={this.state.day}
                        onChange={this.update('day')}
                    />
                </label>
                <label > 
                    <input id='bday-box-input'
                        type='text'
                        value={this.state.year}
                        onChange={this.update('year')}
                    />
                </label>
            </div>
        )
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    demoUser() {
        const demoUser = { email: 'rrr', password: '123456' }
        return (
            <button className='demo-singin' onClick={(e) => {
                e.preventDefault()
                return this.props.processForm(demoUser).then(this.props.closeModal);
            }}>DEMO USER</button>
        )
    }

    render(){
        console.log(this.props.end)
            return(
                <div className='session-form'>
                    <div className='login-form-box'>
                        <div className="close-x">
                            <div onClick={this.props.closeModal} >X</div>
                        </div>
                        <div className='session-form-content'>
                        <div className='session-header-text'>
                        <h3 >{this.props.headerText}</h3>
                        </div>
                        {this.renderErrors()}
                            <form onSubmit={this.handleSubmit} className="login-form">
                            <label className='session-label'> EMAIL ADDRESS
                                {/* <input className={this.props.errors.length === 0 ? 'session-input' : 'session-input-error'} */}
                                <input className='session-input'

                                    type='text' 
                                    value={this.state.email} 
                                    onChange={this.update('email')}
                                />
                            </label>

                            {this.props.formType === 'joinnow' ? this.signUpBirthday() : this.signInNormal()}
                            <input type='submit' value={this.props.buttonText} className='session-singin'/>
                    </form>
                            <div className='session-line'> <span className='session-line-span'>OR</span> </div>
                            {this.props.formType === 'signin' ? this.demoUser() : null }
                            {this.props.otherForm}
                        </div>
                    </div>
                </div>
            )
    }
}
export default SessionForm;