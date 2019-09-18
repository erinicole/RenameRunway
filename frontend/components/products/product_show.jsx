import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stylistNotes: false,
            sizeFit: false,
            productDetails: false,
            meetDeveloper: false
        }
    }


    dropInfo() {
        
    }


    componentDidMount() {
        const productId = this.props.match.params.productId
        this.props.fetchProduct(productId)
    }

    render() {
        const { product } = this.props
        if (!this.props.product) {
            return null
        }
        return (
            <div>
                <div className='show-container-all'>
                    <div className='show-left'>
                        <div className='show-gallery-container'>
                            <img className='show-gallery-one ' className='cursor' src={window.images.testa} />
                            <img className='show-gallery-two ' className='cursor' src={window.images.testb} />
                            <img className='show-gallery-three ' className='cursor' src={window.images.testc} />
                            <img className='show-gallery-four ' className='cursor' src={window.images.testd} />
                        </div>
                        <div className='show-product-container'>
                            <img className='show-main-prod' src={window.images.testa} />
                            <img className='show-main-prod' src={window.images.testb} />
                            <img className='show-main-prod' src={window.images.testc} />
                            <img className='show-main-prod' src={window.images.testd} />

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
                            <div className='show-rent-box'>
                                <p className='show-p-top'>RTR Reserve</p>
                                <p>Rent for 4 days</p>
                                <p className='show-p-bottom' >${product.rent_price}</p>
                            </div>
                        </div>
                        <div className='show-extra-details'>
                            <div className='show-stylsit-notes'>
                                <p className='show-deets' onClick={this.dropInfo}>
                                    <span> STYLIST NOTES </span>
                                    <img className='show-plus' src={window.images.plus} />
                                </p>
                                <p> { this.state.stylistNotes ? product.stylist_notes : ''} </p>
                            </div>
                            <div className='show-size-fit'>
                                <p className='show-deets' onClick={this.dropInfo}>
                                    <span> SIZE &amp; FIT </span>
                                    <img className='show-plus' src={window.images.plus} />
                                </p>
                                <p>{this.state.sizeFit ? product.size_fit : ''}  </p>
                            </div>
                            <div className='show-product-details'>
                                <p className='show-deets' onClick={this.dropInfo}>
                                    <span> PRODUCT DETAILS </span>
                                    <img className='show-plus' src={window.images.plus} />
                                </p>
                                <p>{this.state.productDetails ? product.product_details : ''} </p>
                            </div>
                            <div className='show-erin-social'>
                                <p className='show-deets' onClick={this.dropInfo}>
                                    <span> MEET THE DEVELOPER </span>
                                    <img className='show-plus' src={window.images.plus} />
                                </p>
                                <p>
                                    {this.state.meetDeveloper ? <a href='https://www.linkedin.com/in/erinicole1988/' target='_blank' className='a-link'>
                                    <img id='show-linkedin' src={window.images.linkedin} />
                                </a> : ''
                                }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductShow;