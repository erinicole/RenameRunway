import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.product
    }


    componentDidMount() {
        const productId = this.props.match.params.productId
        this.props.fetchProduct(productId)
    }

    render() {
        const{product} = this.props
        if (!this.props.product) {
            return null
        }
        return (
            <div>
            <div className='show-container-all'>
                <div className='show-left'>
                <div className='show-gallery-container'>
                    <img className='show-gallery-one' src={window.images.testa} />
                    <img className='show-gallery-two' src={window.images.testb} />
                    <img className='show-gallery-three' src={window.images.testc} />
                    <img className='show-gallery-four' src={window.images.testd} />
                </div>
                <div className='show-product-container'>
                    <img className='show-main-prod' src={window.images.testa} />
                </div>
                </div>
                <div className='show-details-container'>
                    <div className='show-header'>
                        <div className='show-header-one'>
                            <div className='show-designer'> Iro </div>
                            <img className='show-heart' src={window.images.heart} />
                        </div>
                        <div className='show-title'>{product.title} </div>
                        <div className='show-header-two'>
                            <div className='show-retail'> ${product.retail_price} retail price </div>
                            <div className='show-stars'> ***** </div>
                        </div>
                    </div>
                    <div className='show-rent-section'>
                        <p className='show-rent-header'> Rent Some Pockets </p>
                        <div className='show-rent-box'></div>
                    </div>
                    <div className='show-extra-details'>
                        <div className='show-stylsit-notes'>{product.stylist_notes}</div>
                        <div className='show-size-fit'>{product.size_fit}</div>
                        <div className='show-product-details'>{product.product_details}</div>
                        <div className='show-erin-social'> 
                            <a href='https://www.linkedin.com/in/erinicole1988/' target='_blank' className='a-link'>
                                <img className='show-linkedin' src={window.images.linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ProductShow;