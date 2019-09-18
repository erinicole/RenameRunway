import React from 'react';


class ProductSlideshow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageA: true,
            imageB: false,
            imageC: false,
            imageD: false
        }
    }

    toggleImage(field) {
        return () => {
            this.setState({
                imageA: false,
                imageB: false,
                imageC: false,
                imageD: false,
                [field]: true
            })
        }
    }

    render() {
        return (
            <div className='show-left'>
                <div className='show-gallery-container'>
                    <div onClick={this.toggleImage('imageA')}>
                        <img  className='cursor' src={window.images.testa} />
                    </div>
                    <div onClick={this.toggleImage('imageB')}>
                        <img  className='cursor' src={window.images.testb} />
                    </div>
                    <div onClick={this.toggleImage('imageC')}>
                        <img  className='cursor' src={window.images.testc} />
                    </div>
                    <div onClick={this.toggleImage('imageD')}>
                        <img  className='cursor' src={window.images.testd} />
                    </div>
                </div>
                <div className='show-product-container'>
                    <p> {this.state.imageA ? <img className='show-main-prod' src={window.images.testa} /> : null} </p>
                    <p> {this.state.imageB ? <img className='show-main-prod' src={window.images.testb} /> : null} </p>
                    <p> {this.state.imageC ? <img className='show-main-prod' src={window.images.testc} /> : null} </p>
                    <p> {this.state.imageD ? <img className='show-main-prod' src={window.images.testd} /> : null} </p>

                </div>
            </div>
        )
    }
}

export default ProductSlideshow;