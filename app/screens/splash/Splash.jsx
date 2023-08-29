import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import splashLight from '../../../assets/splash-light.json';
import splashDark from '../../../assets/splash-dark.json';
import MainContainer from '../../components/main-container/MainContainer';
import { ThemeContext } from '../../context/ThemeContext'

import { colors } from '../../constants/theme';
import SplashStyles from './Splash.styles';

const phrases = [
  'Знания — ключ к светлому будущему',
  'Учеба — это путь к саморазвитию и достижениям',
  'Время учебы – время создания лучшего "я"',
  'Учеба – путь к мудрости и саморазвитию'
];

function Splash() {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer>
      <View style={SplashStyles.container}>
        <LottieView
          style={SplashStyles.animation}
          source={theme === 'dark' ? splashDark : splashLight}
          autoPlay={true}
          loop={true}
        />
        <Text style={[SplashStyles.phrase, {color: themeColors.text}]}>{phrases[phraseIndex]}</Text>
      </View>
    </MainContainer>

  );
}

export default Splash;
