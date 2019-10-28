import React from 'react';
import ReviewtIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    componentDidMount() {
        this.props.fetchReviewsProducts(this.props.productId)
    }

    render() {
        const reviews = this.props.reviews.map(review => {
            return (
                <ReviewtIndexItem
                    key={review.id}
                    review={review}
                />
            )
        });

        return (
            <div className='reviews-entire-container'>
                <div className='reviews-header'>
                    {reviews.length} reviews
                    <br/>
                    ****
                </div>
                {reviews}
            </div>
        );
    }
}

export default ReviewIndex;
