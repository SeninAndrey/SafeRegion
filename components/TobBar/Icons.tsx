import { View } from "react-native";

export const RightIcon = () => (
    <View style={{width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 15, height: 1.5, backgroundColor: '#F9627D', position: 'absolute'}} />
      <View style={{width: 1.5, height: 15, backgroundColor: '#F9627D', position: 'absolute'}} />
    </View>
  );

export const BackIcon = () => (
    <View style={{width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 10, height: 10, borderLeftWidth: 2, borderBottomWidth: 2, borderColor: '#F9627D', 
        transform: [{rotate: '45deg'}]
      }}/>
    </View>
  );