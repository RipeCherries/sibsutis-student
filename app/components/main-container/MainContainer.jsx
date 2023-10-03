import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

import { colors } from '../../constants/theme';
import MainContainerStyles from './MainContainer.styles';

function MainContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  return (
    <View style={[MainContainerStyles.container, { backgroundColor: themeColors.secondary }]}>
      {children}
    </View>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
