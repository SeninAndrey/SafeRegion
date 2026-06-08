import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TobBar.style';
import {ITobBarController} from './TobBar.model';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { BackIcon, RightIcon } from './Icons';

export const TobBar: FC<ITobBarController> = (props) => {
  const {title, onBackPress, showBackButton = false, rightButtons} = props;
  const {top} = useSafeAreaInsets();
  // Защита от undefined - если rightButtons нет, используем пустой массив
  const buttons = rightButtons || [];

  return (
    <View style={
        [styles.container, 
        {marginTop: top || 16}
        ]}>

        {/* Левая кнопка "назад" (опционально) */}
        <View style={styles.leftContainer}>
            {showBackButton && onBackPress && (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <BackIcon/>
                    <Text style={styles.backText}>Parent Title</Text>
                </TouchableOpacity>
            )}
        </View>

        {/* Заголовок по центру */}
        <Text style={styles.text}>{title}</Text>

        {/* Правая группа кнопок-иконок (1-3 штуки) */}
        <View style={styles.rightContainer}>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={`right-button-${index}`}
                    onPress={button.onPress}
                    style={index > 0 && styles.rightButtonMargin}
                >
                    <RightIcon/>
                </TouchableOpacity>
            ))}
        </View>

    </View>
  );
};

TobBar.displayName = 'TobBar';
