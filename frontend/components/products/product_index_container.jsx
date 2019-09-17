import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = state => {
    const products = Object.values(state.entities.products);
    return ({
        products
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchProducts: () => dispatch(fetchProducts())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);