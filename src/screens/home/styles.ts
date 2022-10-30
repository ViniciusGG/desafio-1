import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  containerTop: {
    backgroundColor: '#0D0D0D',
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40,
    height: '30%',

  },
  containerBottom: {  
    backgroundColor: '#1A1A1A',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    marginTop: -60, 
    flex:1,

  },
  eventName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input:{
    flex:1,
    height: 56,
    backgroundColor: '#1A1A1A',
    borderRadius: 5,
    color: '#333',
    padding: 10,  
    fontSize: 16,
    marginRight: 10,
    zIndex: 1,
    //bordar preto
    borderColor: '#131016',
    borderWidth: 1,

  },
  button:{
    height: 56,
    width: 56,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  form:{
    width: '90%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 36,
    position: 'absolute',
    zIndex: 2,
    top: 130,
    alignSelf: 'center',

  },
  infoTask:{
    width: '100%',
    flexDirection: 'row',
    marginBottom: 36, 
    borderBottomWidth: 1,
    borderBottomColor: '#6b6b6b',
    paddingBottom: 20,
    
  },
  listEmptyTitleText:{
    color: '#808080',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listEmptySubTitleText:{
    color: '#808080',
    fontSize: 16,
    textAlign: 'center',
  },
  empty:{
    flex: 1,
    justifyContent: 'center',
  },
  image:{
    marginTop: 36,
    alignSelf: 'center',
  },
  plusImage:{ 
    
  },
  clipboard:{ 
    alignSelf: 'center',
  },
  create:{   
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  createNumber:{
    backgroundColor: '#333333',    
    color: '#808080',    
    borderRadius: 15, 
    width: 25,
    textAlign: 'center',
    marginRight: 100,
  },
  taskCompleted:{
    backgroundColor: '#333333',    
    color: '#808080',  
    borderRadius: 15,  
    width: 25,
    textAlign: 'center',

  },
  complete:{
    color: '#5E60CE',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,  
  }

});