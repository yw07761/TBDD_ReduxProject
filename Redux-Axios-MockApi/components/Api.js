import React, { useEffect } from 'react';
import { Text, TextInput, View, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClothes, fetchPerson, selectClother, selectPerson, selectClotherStatus, selectClotherError } from '../redux/clotherSlice';

const Api = () => {
  const dispatch = useDispatch();
  const clother = useSelector(selectClother);
  const person = useSelector(selectPerson);
  const status = useSelector(selectClotherStatus);
  const error = useSelector(selectClotherError);

  // Fetch data when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchClothes());
      dispatch(fetchPerson());
    }
  }, [status, dispatch]);

  const renderPerson = ({ item }) => (
    <View style={styles.personItem}>
      <Text style={{ fontSize: 16, textAlign: 'center', margin: 20 }}>
        {item.name}
      </Text>
    </View>
  );

  const renderClother = ({ item }) => (
    <View style={styles.clotherItem}>
      <Image source={{ uri: item.image }} style={styles.clotherImage} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <Header />
        <Banner1 />
        <Item />
        <Banner2 />

        {/* Display Person data */}
        <Text style={styles.sectionTitle}>Person</Text>
        <FlatList
          data={person}
          renderItem={renderPerson}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          style={styles.personList}
        />

        {/* Display Clother data */}
        <Text style={styles.sectionTitle}>Clothes</Text>
        <FlatList
          data={clother}
          renderItem={renderClother}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          style={styles.clotherList}
        />

        <Footer />
      </View>
    </ScrollView>
  );
};

// Header, Banner, Footer, Item components here...
const Header = () => (
  <View style={styles.header}>
    <View style={styles.row}>
      <Image source={require('../assets/download10.png')} style={styles.logoItem} />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search here..." />
        <Image source={require('../assets/download10.png')} style={styles.searchIcon} />
      </View>
      <Image source={require('../assets/download.png')} style={styles.logoItem} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={styles.text}>Men</Text>
      <Text style={styles.text}>Women</Text>
      <Text style={styles.text}>Kids</Text>
      <Text style={styles.text}>Shoes</Text>
      <Text style={styles.text}>Sell All</Text>
    </View>
  </View>
);

const Banner1 = () => (
  <View style={styles.banner}>
    <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
    <Text style={styles.bannerText}>Get your own clothes and style!</Text>
  </View>
);

const Item = () => (
  <View>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 20 }}>
        <b>This Week's Highlight!</b>{' '}
      </Text>
      <Text style={{ marginLeft: 50 }}> See all </Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'column' }}>
        <Image source={require('../assets/download4.png')} />
        <Text style={{ fontSize: 12, textAlign: 'center' }}>Parachule jacket</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>$110</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Image source={require('../assets/download4.png')} />
        <Text style={{ fontSize: 12, textAlign: 'center' }}>Relax jacket</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>$120</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Image source={require('../assets/download4.png')} />
        <Text style={{ fontSize: 12, textAlign: 'center' }}>Villa</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>$135</Text>
      </View>
    </View>
  </View>
);

const Banner2 = () => (
  <View style={styles.banner}>
    <Text style={{ fontSize: 20 }}>
      <b>Newest!</b>
    </Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
    <Text style={styles.bannerText}>Get your own clothes and style!</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text>Category</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text>Notification</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text>Profile</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  // Styles for your components
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#6053CC',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  logoItem: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3153EE',
    borderRadius: 10,
    paddingHorizontal: 5,
    height: 40,
    flex: 1,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  banner: {
    margin: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  bannerText: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  clotherList: {
    marginTop: 10,
  },
  clotherItem: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 2,
  },
  clotherImage: {
    width: 100,
    height: 100,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#6053CC',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  personItem: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  
  personList: {
    marginTop: 10,
  },
});

export default Api;
