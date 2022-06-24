import { useState } from 'react';
import './App.scss';
import data from '../../data/data';

//components
import Header from '../Header/Header';
import SocialCards from '../SocialCards/SocialCards';
import Title from '../Title/Title';
import FacebookCard from '../Card/FacebookCard/FacebookCard';
import InstagramCard from '../Card/InstagramCard/InstagramCard';
import TwitterCard from '../Card/TwitterCard/TwitterCard';
import YoutubeCard from '../Card/YoutubeCard/YoutubeCard';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app--${theme}`}>
      <div className='container'>
        <Header theme={theme} followersAmount={23804} handleThemeChange={handleThemeChange} />
        <main>
          <section id='Overview'>
            <ul className='cards'>
              {data.map((socialMedia, index) => {
                return (
                  <li key={index}>
                    <SocialCards socialMedia={socialMedia} theme={theme} />
                  </li>
                );
              })}
            </ul>
          </section>
          <section id='overviewToday'>
            <Title variant={'h2'} theme={theme}>
              Overview - Today
            </Title>
            <ul className='cards'>
              {data[0].activities.map((activity, index) => {
                return (
                  <li key={index}>
                    <FacebookCard activity={activity} key={index} theme={theme} />
                  </li>
                );
              })}
              {data[1].activities.map((activity, index) => {
                return (
                  <li key={index}>
                    <InstagramCard activity={activity} key={index} theme={theme} />
                  </li>
                );
              })}
              {data[2].activities.map((activity, index) => {
                return (
                  <li key={index}>
                    <TwitterCard activity={activity} key={index} theme={theme} />
                  </li>
                );
              })}
              {data[3].activities.map((activity, index) => {
                return (
                  <li key={index}>
                    <YoutubeCard activity={activity} key={index} theme={theme} />
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
