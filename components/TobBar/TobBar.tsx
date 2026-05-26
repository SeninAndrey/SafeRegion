import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './TobBar.style';
import {ITobBarController} from './TobBar.model';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Icon = () => (
  <View style={{width: 15, height: 15, borderRadius: 10, backgroundColor: 'black'}} />
)

export const TobBar: FC<ITobBarController> = (props) => {
  const {title} = props;
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.text}>{title}</Text>
      <Icon />
    </View>
  );
};

TobBar.displayName = 'TobBar';
