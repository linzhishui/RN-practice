import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, itemData) => (
  <View key={itemData.item} style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuess.length);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuess((curGuess) => [nextNumber.toString(), ...curGuess]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          onPress={() => {
            nextGuessHandler('lower');
          }}
        >
          <Ionicons name="md-remove" size={24} color={'white'} />
        </MainButton>
        <MainButton
          onPress={() => {
            nextGuessHandler('greater');
          }}
        >
          <Ionicons name="md-add" size={24} color={'white'} />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView>{pastGuess.map((guess, idx) => renderListItem(guess, pastGuess.length - idx))}</ScrollView> */}
        <FlatList contentContainerStyle={styles.list} keyExtractor={(item) => item} data={pastGuess} renderItem={renderListItem.bind(this, pastGuess.length)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  listContainer: {
    // flex: 1,
    width: '60%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  listItem: {
    borderColor: 'black',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GameScreen;
