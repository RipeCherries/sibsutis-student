import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../constants/theme';
import SearchFieldStyles from './SearchField.styles';
import { ThemeContext } from '../../context/ThemeContext';

function SearchField({ value, onChangeFunc }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  return (
    <View style={[SearchFieldStyles.container, { borderColor: themeColors.primary }]}>
      <Ionicons
        color={themeColors.primary}
        size={24}
        name="ios-search"
      />
      <TextInput
        style={[SearchFieldStyles.input, { color: themeColors.text }]}
        value={value}
        onChangeText={(text) => onChangeFunc(text)}
        placeholder="Поиск по группе"
        placeholderTextColor={themeColors.text}
      />
    </View>
  );
}

export default SearchField;
