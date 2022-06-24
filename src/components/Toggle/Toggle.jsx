import './Toggle.scss';

const Toggle = ({ title, theme, handleOnClick }) => {
  return (
    <div className='toggle' onClick={handleOnClick} role='button'>
      <span className={`toggle__name--${theme}`}>{title}</span>
      <div className={`toggle__button--${theme}`}></div>
    </div>
  );
};

export default Toggle;
