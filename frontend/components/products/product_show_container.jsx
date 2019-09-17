import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId
    const allProducts = Object.values(state.entities.products)
    // const product = allProducts.find( el => {
    //     return el.title === productTitle
    // })
    const product = state.entities.products[productId]
    return ({
        product: product
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchProduct: (id) => dispatch(fetchProduct(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)