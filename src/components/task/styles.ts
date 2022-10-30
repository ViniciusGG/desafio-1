import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },
  textDone: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    marginLeft: 16,
    textDecorationLine: 'line-through',
  },

  button:{
    height: 56,
    width: 56,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});