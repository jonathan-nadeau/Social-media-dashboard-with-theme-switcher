import './SocialCards.scss';
import { handleOnMouseEnter, handleOnMouseLeave, renderImage, thousandFormatter } from '../../functions';

const SocialCards = ({ socialMedia, theme }) => {
  const renderCardBody = () => {
    if (socialMedia.socialMedia === 'youtube') {
      return (
        <div className={`card__body--${theme}`}>
          <p className='followersAmount'>
            {thousandFormatter(socialMedia.subscribers)}
            <span> SUBSCRIBERS</span>
          </p>
          {socialMedia.subscribersDifference[0] === '-' ? (
            <p className={`text-red`}>
              {renderImage('down')}
              {` ${socialMedia.subscribersDifference[1]} Today`}
            </p>
          ) : (
            <p className={`text-green`}>
              {renderImage('up')}
              {` ${socialMedia.subscribersDifference[1]} Today`}
            </p>
          )}
        </div>
      );
    } else {
      return (
        <div className={`card__body--${theme}`}>
          <p className='followersAmount'>
            {thousandFormatter(socialMedia.followers)}
            <span> FOLLOWERS</span>
          </p>
          {socialMedia.followersDifference[0] === '-' ? (
            <p className={`text-red`}>
              {renderImage('down')}
              {` ${socialMedia.followersDifference[1]} Today`}
            </p>
          ) : (
            <p className={`text-green`}>
              {renderImage('up')}
              {` ${socialMedia.followersDifference[1]} Today`}
            </p>
          )}
        </div>
      );
    }
  };

  return (
    <div
      onMouseEnter={(event) => handleOnMouseEnter(event, `card--${theme}--hover`)}
      onMouseLeave={(event) => handleOnMouseLeave(event, `card--${theme}--hover`)}
      className={`card--${theme} card--${socialMedia.socialMedia}`}
    >
      <div className={`card__header--${theme}`}>
        {renderImage(socialMedia.socialMedia)}
        <h2>{socialMedia.user}</h2>
      </div>
      {renderCardBody()}
    </div>
  );
};

export default SocialCards;
