import '../Card.scss';
import { renderImage, thousandFormatter, handleOnMouseEnter, handleOnMouseLeave } from '../../../functions';

const TwitterCard = ({ activity, theme }) => {
  const getTypeOfCard = () => {
    if (Object.keys(activity)[0] === 'retweets') {
      return {
        title: 'Retweets',
        keys: ['retweets', 'retweetsDifference'],
      };
    } else {
      return {
        title: 'Likes',
        keys: ['likes', 'likesDifference'],
      };
    }
  };

  const { title, keys } = getTypeOfCard();

  const getDifferenceIcon = () => {
    if (activity[keys[1]][0] === '-') {
      return 'down';
    } else {
      return 'up';
    }
  };

  const differenceIcon = getDifferenceIcon();

  return (
    <div
      className={`Card--${theme}`}
      onMouseEnter={(event) => handleOnMouseEnter(event, `Card--${theme}--hover`)}
      onMouseLeave={(event) => handleOnMouseLeave(event, `Card--${theme}--hover`)}
    >
      <div className={`Card__header--${theme}`}>
        <p className={`Card__title--${theme}`}>{title}</p>
        {renderImage('twitter')}
      </div>
      <div className={`Card__info--${theme}`}>
        <p className={`Card__amount--${theme}`}>{thousandFormatter(activity[keys[0]])}</p>
        <p className={`Card__amountDiffrence ${differenceIcon === 'down' ? 'text-red' : 'text-green'}`}>
          {renderImage(differenceIcon)}
          {activity[keys[1]][1]}
          {` Today`}
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;
