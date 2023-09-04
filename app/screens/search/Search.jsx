import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import MainContainer from '../../components/main-container/MainContainer';

import SearchStyles from './Search.styles';

function Search() {
  const a = useSelector((store) => store.groups);
  return (
    <MainContainer>
      <Text>Search Screen</Text>
      {
            a.map((item) => (
              <Text key={item.groupId}>{item.groupName}</Text>
            ))
        }
    </MainContainer>
  );
}

export default Search;
