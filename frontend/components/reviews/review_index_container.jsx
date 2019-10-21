import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_action';

const mapStateToProps = state => {
    // debugger
    const reviews = Object.values(state.entities.reviews);
    return ({
        reviews
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchReviews: (product_id) => dispatch(fetchReviews(product_id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)