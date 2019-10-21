import React from 'react';

const ReviewtIndexItem = (props) => {

    return (
        < div className='review-card'>
            {props.review.body}
        </div >
    )
};

export default ReviewtIndexItem;
