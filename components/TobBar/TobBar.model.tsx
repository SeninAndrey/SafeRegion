interface RightButton {
    iconName: string;
    onPress: () => void;
  }

export interface ITobBarController {
    title: string;
    onBackPress?: () => void; 
    showBackButton?: boolean;
    rightButtons?: RightButton[];
}
