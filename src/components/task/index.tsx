import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from './styles';

type Props = {
  name: string;
  onRemove?: () => void;
  onCheck?: () => void;
}

export function Task({ name, onRemove, onCheck }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>

      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={
          () => {
            setChecked(!checked);
            onCheck && onCheck();
          }
        } 
        theme={{ colors: { primary: '#273FAD' } }}
      />

      <Text style={checked ? styles.textDone : styles.name}>{name}</Text>
 
      <TouchableOpacity style={styles.button} onPress={onRemove}>        
          <Image source={require('../../../trash.png')} />        
      </TouchableOpacity>
    </View>
  );
}