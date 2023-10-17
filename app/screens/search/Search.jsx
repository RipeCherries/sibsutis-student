import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import MainContainer from '../../components/main-container/MainContainer';
import SearchField from '../../components/search-field/SearchField';

import SearchStyles from './Search.styles';
import GroupItem from '../../components/group-item/GroupItem';
import { saveMainGroup } from '../../utils/mainGroup';
import { loadMainGroupLessonsAndSaveFromApi } from '../../utils/loadMainGroupLessons';

function Search({ route }) {
  const context = route.params?.context || 'main';

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const groups = useSelector((store) => store.groups);

  const [searchData, setSearchData] = useState('');
  const filteredGroups = groups.filter((item) => item.groupName.toLowerCase().includes(searchData.toLowerCase()));

  const handlePress = async (group) => {
    if (context === 'firstRun' || context === 'changeGroup') {
      await saveMainGroup(dispatch, group);
      await loadMainGroupLessonsAndSaveFromApi(dispatch, group);

      if (context === 'changeGroup') {
        navigation.goBack();
      }
    } else if (context === 'main') {
      try {
        const apiMainGroupLessonsResponse = await axios.get(
          `${process.env.EXPO_PUBLIC_API_BASE_URL}/lessons/${group.groupId}`,
          {
            headers: {
              'x-api-key': process.env.EXPO_PUBLIC_API_TOKEN,
            },
          },
        );

        navigation.navigate('GroupSchedule', { selectedGroup: group, lessons: apiMainGroupLessonsResponse.data });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <MainContainer>
      <View style={SearchStyles.container}>
        <SearchField value={searchData} onChangeFunc={setSearchData} />
        <View style={SearchStyles.groupsList}>
          <FlatList
            data={filteredGroups}
            renderItem={({ item }) => (
              <GroupItem
                groupName={item.groupName}
                onPress={() => handlePress(item)}
              />
            )}
            keyExtractor={(item) => item.groupId}
          />
        </View>
      </View>
    </MainContainer>
  );
}

Search.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string,
    }),
  }),
};

Search.defaultProps = {
  route: {},
};

export default Search;
