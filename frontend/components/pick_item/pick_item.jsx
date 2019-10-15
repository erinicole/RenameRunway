import React from 'react';


class PickItemsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zipCode: props.user.zip_code, //set initial zip code to user if loggedin
            date: '',
            itemId: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState(
            { [field]: e.target.value }
        )
    }


    getSignIn() {
        this.props.openModal('signin');
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.user && this.state.itemId === '') {
            alert('Size needed')
        }
        else if (this.props.user) {
            //did a lot of debugging figured out how  to pass shoppingCartItem
            // through to createShoppingCartItem thunk action
            const shoppingCartItem = {
                user_id: this.props.user.id,
                item_id: this.state.itemId
            }
            this.props.createShoppingCartItem(shoppingCartItem);
        } else {
            this.props.openModal('signin');
        }
    }

    componentDidMount() {
        this.props.fetchItems(this.props.productId);
    }

    render() {
        return (
            <div className='add-item-div'>
                <form className='add-item-form' >
                    {/* set initial zip code to user if loggedin */}
                    <label className='pick-item-label'> ZIP CODE
                    <input className='pick-item-input'
                            type='text'
                            defaultValue={this.props.user ? this.state.zipCode : ''}
                            onChange={this.update('zipCode')} />
                    </label>
                    <label className='pick-item-label'> SIZE
                        <select onChange={this.update('itemId')}>
                            {/* below iterated through the prop to create the select options
                            need to put something between the option tags to show */}
                            <option value=''>Select</option> 
                            {this.props.items.map(item => {
                                return (
                                    <option value={item.size} key={item.size}>
                                        {item.size}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                    <label className='pick-item-label'>
                        Date goes here
                        <input className='pick-item-input'
                            type='date'
                            value='date'
                            onChange={this.update('date')} />
                    </label>
                    {/* changed */}
                    <input type='submit'
                        value='ADD TO BAG'
                        onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default PickItemsForm;