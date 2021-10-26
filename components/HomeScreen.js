import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

const HomeScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.background,
          },
        ]}
      >
        <Image style={styles.categoryItemImage} source={item.image} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <TouchableOpacity>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected
                  ? colors.background
                  : colors.secondary,
              },
            ]}
          >
            <Feather
              name='chevron-right'
              size={16}
              style={[
                styles.categorySelectIcon,
                {
                  color: item.selected ? colors.textDark : colors.background,
                },
              ]}
            />
          </View>
        </TouchableOpacity>
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
            <TouchableOpacity>
              <Image
                style={styles.profileImage}
                source={require('../assets/images/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name='menu' size={24} color={colors.textDark} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleSubtitle}>Food</Text>
          <Text style={styles.titleTitle}>Delivery</Text>
        </View>
        {/* Search Bar */}
        <View style={styles.searchBarWrapper}>
          <Feather name='search' size={16} color={colors.textDark} />
          <TextInput style={styles.searchBar} placeholder='Search...' />
        </View>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('Details', { item: item })}
              >
                <View
                  style={[
                    styles.popularCardWrapper,
                    { marginTop: item.id == 1 ? 10 : 20 },
                  ]}
                >
                  <View>
                    <View style={styles.popularInfo}>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name='crown'
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularTopText}>
                          top of the week
                        </Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <TouchableOpacity>
                        <View style={styles.addPizzaButton}>
                          <Feather
                            name='plus'
                            size={12}
                            color={colors.textDark}
                          />
                        </View>
                      </TouchableOpacity>

                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name='star'
                          size={12}
                          color={colors.textDark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularCardRight}>
                    <Image style={styles.popularImage} source={item.image} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
  },
  titleSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titleTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    marginLeft: 10,
    paddingVertical: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    height: 60,
    width: 60,
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  categorySelectWrapper: {
    marginTop: 20,
    height: 26,
    width: 26,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  popularWrapper: {
    marginTop: 10,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    marginLeft: 20,
  },
  popularTopText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginLeft: 10,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
    marginTop: 20,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    marginTop: 5,
    color: colors.lightGray,
  },
  popularCardRight: {
    marginLeft: 20,
  },
  popularImage: {
    width: 250,
    height: 125,
    resizeMode: 'contain',
  },
  popularTitlesWrapper: {
    marginLeft: 22,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    marginLeft: 5,
  },
});
