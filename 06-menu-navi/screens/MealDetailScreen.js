import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Button
        title="Go Back to Gategories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;
