import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
export const MyButton = ({text, navigation, name}) => {
  return (
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate(name)}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
  )


}

const styles = StyleSheet.create({

button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10, 
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});