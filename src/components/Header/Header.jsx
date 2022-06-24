import './Header.scss';
import Title from '../Title/Title';
import Toggle from '../Toggle/Toggle';

const Header = ({ followersAmount, theme, handleThemeChange }) => {
  return (
    <header>
      <div className={`header`}>
        <Title variant={'h1'} theme={theme}>
          Social Media Dashboard
        </Title>
        <p className={`header__subtitle--${theme}`}>
          Total Followers : {followersAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
      <div>
        <Toggle
          theme={theme}
          title={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
          handleOnClick={handleThemeChange}
        />
      </div>
    </header>
  );
};

export default Header;
