import React from 'react';

const ReviewtIndexItem = (props) => {
    return (
        < div className='review-card'>
            <div className='review-card-p'> 
                <span className='review-card-stars'> ****</span>
                <span className='review-card-date'>
                    {new Date(props.review.created_at).toDateString()}
                </span>
                <br/>
                <div className='review-card-info'>
                    {props.review.user.first_name}
                </div>
                <div className='review-card-comment'>
                        {props.review.body}
                </div>
            </div>
                
        </div >
    )
};

export default ReviewtIndexItem;
