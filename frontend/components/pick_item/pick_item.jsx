import React from 'react';


class PickItemsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zipCode: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    };

   getSignIn(){
      this.props.openModal('signin')
   };

    handleSubmit(e){
        debugger
        e.preventDefault();
        if (this.props.user){
            console.log('true');
        } else {
            this.props.openModal('signin')
        }
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {


        return (
            <div className='add-item-div'>
                <form className='add-item-form' >
                    <label className='pick-item-label'> ZIP CODE
                <input className='pick-item-input'

                            type='text'
                            value={this.props.user ? this.props.user.zip_code : ''}
                        />
                    </label>
                    <label className='pick-item-label'> SIZE
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </label>
                    <label className='pick-item-label'> Date goes here
                <input className='pick-item-input'

                            type='date'
                            value='date'
                        />
                    </label>
                    <input type='submit' value='ADD TO BAG' onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default PickItemsForm;