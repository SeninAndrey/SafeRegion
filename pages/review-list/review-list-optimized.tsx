import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ListRenderItem,
} from 'react-native';

type TData = {
  id: string;
  title: string;
};

// Выносим статические данные за компонент
const BASE_DATA: TData[] = [
  { id: '1', title: '1' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
  { id: '6', title: '6' },
  { id: '7', title: '7' },
  { id: '8', title: '8' },
];

// Мемоизированный компонент элемента
const ListItem = React.memo(({ title }: { title: string }) => (
  <View style={styles.item}>
    <View style={styles.dot} />
    <Text>{title}</Text>
  </View>
));

ListItem.displayName = 'ListItem';

export const OptimizationList = () => {
  const [value, setValue] = useState('');

  // Мемоизация данных
  const data = useMemo(() => {
    if (!value) return BASE_DATA;
    return [{ id: 'dynamic_0', title: value }, ...BASE_DATA];
  }, [value]);

  // Мемоизация рендер-функции
  const renderItem = useCallback<ListRenderItem<TData>>(
    ({ item }) => <ListItem title={item.title} />,
    []
  );

  // Оптимизация keyExtractor
  const keyExtractor = useCallback((item: TData) => item.id, []);

  // Фиксированная высота для getItemLayout
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: 60,
      offset: 60 * index,
      index,
    }),
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Введите значение..."
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        removeClippedSubviews={true}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    margin: 5,
    padding: 8,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 5,
    margin: 2,
    borderRadius: 5,
    height: 60, // Фиксированная высота для оптимизации
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
});