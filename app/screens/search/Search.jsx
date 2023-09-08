import React, {useContext, useState} from 'react';
import {
  SafeAreaView, Text, FlatList, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import MainContainer from '../../components/main-container/MainContainer';
import SearchField from '../../components/search-field/SearchField';

import SearchStyles from './Search.styles';
import GroupItem from '../../components/group-item/GroupItem';
import {ThemeContext} from "../../context/ThemeContext";
import {colors} from "../../constants/theme";

function Search() {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const groups = useSelector((store) => store.groups);

  const [searchData, setSearchData] = useState('');

  const filteredGroups = groups.filter((item) => item.groupName.toLowerCase().includes(searchData.toLowerCase()));

  return (
    <MainContainer>
      <View style={SearchStyles.container}>
        <SearchField value={searchData} onChangeFunc={setSearchData} />
        <View style={SearchStyles.groupsList}>
          <FlatList
            data={filteredGroups}
            renderItem={({ item }) => <GroupItem groupName={item.groupName} />}
            keyExtractor={(item) => item.groupId}
          />
        </View>
      </View>
    </MainContainer>
  );
}

export default Search;
