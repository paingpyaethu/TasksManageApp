// components/SearchFilter.tsx

import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../themes';

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

const SearchFilter = ({onSearch}: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  input: {
    flex: 1,
    height: hp(6),
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    borderRadius: hp(1.2),
    paddingHorizontal: hp(2),
    marginRight: wp(3),
    letterSpacing: 1.2,
  },
});

export default SearchFilter;
