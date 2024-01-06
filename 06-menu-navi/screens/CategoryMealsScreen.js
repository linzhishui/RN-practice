import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Meal Detail!"
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
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

export default CategoryMealsScreen;
