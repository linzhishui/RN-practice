import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (porps) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <Text>{itemData.item.title}</Text>;
      }}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Products',
  };
};

export default ProductsOverviewScreen;
