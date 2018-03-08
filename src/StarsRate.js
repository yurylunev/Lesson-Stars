import React from 'react';
import Star from './Star';

const StarsRate = ({totalStars, starsSelected, starsPreSelected, onRate, onPreRate, onRateOut}) =>
    <div className='stars-rate' onMouseOut={() => onRateOut()}>
        {
            [...Array(totalStars)].map((n, i) =>
                <Star key={i}
                      selected={(i < starsSelected)}
                      preSelected={(i < starsPreSelected)}
                      onMouseMove={() => onPreRate(i + 1)}
                      onClick={() => onRate(i + 1)}/>
            )
        }
    </div>;

export default StarsRate;