/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../themes';

type SafeAreaWrapperProps = {
  children: ReactNode;
};

const SafeAreaWrapper = ({children}: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
