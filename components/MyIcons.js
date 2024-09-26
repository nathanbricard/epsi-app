import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MyIcon = ({ text, navigation, name }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
      <Icon name={text} size={30} color="#000" />
    </TouchableOpacity>
  );
};
