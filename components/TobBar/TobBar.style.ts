import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    height: 44,
    backgroundColor: '#fff'
  },
  leftContainer: {
    width: 100,
    alignItems: 'flex-start',    
  },
  rightContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  backText: {
    color: '#F9627D',
    fontSize: 17
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 600
  },
  rightButtonMargin: {
    marginLeft: 29,  
  },
}); 
