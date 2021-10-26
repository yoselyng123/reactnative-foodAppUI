import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image style={styles.itemImage} source={item.image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name='chevron-left'
                  size={16}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.headerRight}>
                <MaterialCommunityIcons
                  name='star'
                  size={16}
                  color={colors.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${item.price}</Text>
        </View>

        {/* Information */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.TitleWrapper}>
              <Text style={styles.infoTitle}>Size</Text>
              <Text style={styles.titleElement}>{item.size}</Text>
            </View>
            <View style={styles.TitleWrapper}>
              <Text style={styles.infoTitle}>Crust</Text>
              <Text style={styles.titleElement}>{item.crust}</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.infoTitle}>Delivery in</Text>
              <Text style={styles.titleElement}>{item.deliveryTime}</Text>
            </View>
          </View>
          <View style={styles.infoRightWrapper}>
            <Image style={styles.infoRightImage} source={item.image} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Place an Order */}
        <TouchableOpacity
          onPress={() => {
            alert('Your order has been placed!');
          }}
        >
          <View style={styles.orderWrapper}>
            <Text style={styles.orderTitle}>Place an Order</Text>
            <Feather name='chevron-right' size={16} color={colors.textDark} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerLeft: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.lightGray,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesWrapper: {
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '60%',
  },
  priceWrapper: {
    marginTop: 20,
  },
  price: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.price,
  },
  infoWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    marginRight: 20,
  },
  TitleWrapper: {
    marginBottom: 20,
  },
  infoTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.lightGray,
  },
  titleElement: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.black,
  },
  infoRightImage: {
    resizeMode: 'contain',
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.black,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    marginRight: 15,
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  itemImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 22,
    borderRadius: 50,
    marginTop: 60,
  },
  orderTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.black,
    marginRight: 10,
  },
});
