import {TobBar} from "../../components/TobBar/TobBar";
import {ScrollView} from "react-native";

export const TestScreen = () => {

  return (
    <ScrollView style={{flex: 1}}>
      <TobBar title={'1 Topbar'} />
      <TobBar title={'2 Topbar'} />
      <TobBar title={'3 Topbar'} />
      <TobBar title={'4 Topbar'} />
      <TobBar title={'5 Topbar'} />
    </ScrollView>
  )
}
