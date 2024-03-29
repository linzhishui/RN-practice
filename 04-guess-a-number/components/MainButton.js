import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MainButton;
