import { Image, StyleSheet, Text, View } from 'react-native';

import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          style={styles.image}
          resizeMode="cover"
          source={{ uri: 'https://cdn.pixabay.com/photo/2021/10/13/10/56/mountains-6706185_1280.jpg' }}
        />
      </View>
      <Text>Number of rounds:{props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onRestartGame}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'gray',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
