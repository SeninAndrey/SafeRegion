import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

type TData = {
  title: string;
};


export const OptimizationList = () => {
  const [value, setValue] = useState('');

  const data: TData[] = [
    {title: value},
    {title: '1'},
    {title: '2'},
    {title: '3'},
    {title: '4'},
    {title: '6'},
    {title: '5'},
    {title: '7'},
    {title: '8'},
  ];

  return (
    <ScrollView>
      <TextInput
        style={{borderWidth: 1, margin: 5}}
        value={value}
        onChangeText={setValue}
      />
      {data.map(item => (
        <View
          key={item.title}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'red',
            padding: 5,
            margin: 2,
            borderRadius: 5,
          }}
        >
          <View style={{height: 10, width: 10, backgroundColor: 'yellow'}} />
          <Text>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
