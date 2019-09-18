import React from 'react';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const products = this.props.products.map(product => {
            return (
                    <ProductIndexItem
                        key={product.id}
                        product={product}
                    />
            )
        });

        let content = []
        for (let i = 1; i <= products.length + 1; i++) {
            if (i % 3 === 0) {
                content.push(
                    <div className='row' key={i - 2}>
                        {products[i - 1]}
                        {products[i - 2]}
                        {products[i - 3]}
                    </div>
                )
            }
        }
        return (
            <div className='products-entire-container'>

                <div className='filter-container'>
                    <div> shop</div>
                </div>
                <div className='products-container'>
                    <div className='products-header' >
                        <span className='products-view-all'> View All </span> 
                        <span className='products-count'> ({products.length})  </span>
                    </div>
                    <div>
                        {content}
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductIndex;
