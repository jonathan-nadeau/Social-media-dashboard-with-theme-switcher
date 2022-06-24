import './Title.scss';

const Title = ({ children, variant, theme }) => {
  if (variant === 'h1') {
    return <h1 className={`title--${theme}`}>{children}</h1>;
  }
  if (variant === 'h2') {
    return <h2 className={`title--${theme}`}>{children}</h2>;
  }
};

export default Title;
