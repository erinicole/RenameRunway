import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviewsProducts } from '../../actions/review_action';

const mapStateToProps = state => {
    // debugger
    const reviews = Object.values(state.entities.reviews);
    return ({
        reviews
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchReviewsProducts: (product_id) => dispatch(fetchReviewsProducts(product_id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)