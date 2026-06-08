import {TobBar} from "../../components/TobBar/TobBar";
import {Alert, ScrollView} from "react-native";  

export const TestScreen = () => {

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'light-grey'}}>
        {/* только title */}        
        <TobBar title={'1 Topbar'} />

        {/* title + title кнопки назад */}
        <TobBar 
            title={'2 Topbar'} 
            showBackButton={true}
            onBackPress={() => Alert.alert('Назад', 'Вы нажали кнопку назад')}
        />

        {/* только title и 1 кнопка(иконка) справа */}
        <TobBar 
            title={'3 Topbar'} 
            rightButtons={[
                {iconName: 'Добавить 1', onPress: () => Alert.alert('Назад', 'Вы нажали кнопку назад')}
            ]}
        />

        {/* title + title кнопки назад + 1 кнопка(иконка) справа */}
        <TobBar 
            title={'4 Topbar'} 
            showBackButton={true}
            onBackPress={() => Alert.alert('Назад', 'Вы нажали кнопку назад')}
            rightButtons={[
                {iconName: 'Добавить 1', onPress: () => Alert.alert('Добавить 1', 'Вы добавили пункт 1')}
            ]}
        />

        {/* title + title кнопки назад + 3 кнопки(иконка) справа */}
        <TobBar 
            title={'5 Topbar'} 
            showBackButton={true}
            onBackPress={() => Alert.alert('Назад', 'Вы нажали кнопку назад')}
            rightButtons={[
                {iconName: 'Добавить 1', onPress: () => Alert.alert('Добавить 1', 'Вы добавили пункт 1')},
                {iconName: 'Добавить 1', onPress: () => Alert.alert('Добавить 2', 'Вы добавили пункт 2')},
                {iconName: 'Добавить 1', onPress: () => Alert.alert('Добавить 3', 'Вы добавили пункт 3')}
            ]}
        />
    </ScrollView>
  )
}
