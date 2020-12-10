import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
// import {Heading} from '../../../../components';
import {FilledButton} from '../../components';
// import { set } from 'react-native-reanimated';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar, Image, Accessory} from 'react-native-elements';

function AllProduct({navigation}) {
  const [count, setCount] = useState(0);
  const [productsData, setProductsData] = useState([]);
  var Test = [
    {
      id: 1,
      shop_id: 3,
      name: 'Veg Momos',
      price: 75,
      stock: 1,
      image:
        'https://res.cloudinary.com/df1njw2ap/image/upload/v1601542504/iaa96jivo99mxrkz64gv.jpg',
      created_at: '2020-10-01T08:55:04.000Z',
      updated_at: '2020-10-01T08:55:04.000Z',
      isActive: 1,
      productQuantity: 6,
      unit: 2,
      discountPercentage: 0,
      discountPrice: 75,
      productDescription: null,
      vejNonVej: 0,
      unitName: 'piece',
    },
    {
      id: 2,
      shop_id: 3,
      name: 'Veg Paneer Momos',
      price: 85,
      stock: 1,
      image:
        'https://res.cloudinary.com/df1njw2ap/image/upload/v1601542652/s6xyetpsuhumkg6duxxi.jpg',
      created_at: '2020-10-01T08:57:33.000Z',
      updated_at: '2020-10-01T08:57:33.000Z',
      isActive: 1,
      productQuantity: 6,
      unit: 2,
      discountPercentage: 0,
      discountPrice: 85,
      productDescription: null,
      vejNonVej: 0,
      unitName: 'piece',
    },
  ];

  useEffect(() => {
    axios
      .get('https://questkart.com/api/enduser/product/products/1')
      .then(function (response) {
        setProductsData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {productsData.map((data, index) => (
          <View style={styles.productBanner}>
            <View style={styles.avatar}>
              <Avatar
                size={hp(15)}
                activeOpacity={0.7}
                //  style={styles.profileImage}
                rounded
                source={{uri: data.image}}>
                {/* <Accessory  onAccessoryPress={() => alert('test')} /> */}
              </Avatar>
            </View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 15, textTransform: 'capitalize'}}>
                {data.name}
              </Text>
              <Text style={{color: 'darkgray'}}>
                {data.unit} {data.unitName}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'darkslategray'}}>
                  &#8377;{data.price}
                </Text>
                {data.discountPercentage > 0 && (
                  <Text
                    style={{
                      marginLeft: 10,
                      textDecorationLine: 'line-through',
                      color: 'grey',
                      textDecorationStyle: 'solid',
                    }}>
                    &#8377;{data.discountPrice}
                  </Text>
                )}
              </View>
              {data.stock == 1 ? (
                <FilledButton
                  style={styles.text}
                  title={'In Stock'}
                  onPress={() => {
                    setCount(count + 1);
                  }}
                />
              ) : (
                <FilledButton
                  style={styles.text}
                  title={'Out of stock'}
                  onPress={() => {
                    setCount(count + 1);
                  }}
                />
              )}
              <View style={{flexDirection: 'row'}}>
                {/* <FilledButton
      style={styles.text}
        title={'View'}
        onPress={() => {
          setCount(count + 1);
        }}
        
      /> */}
                <FilledButton
                  style={styles.text}
                  title={'Delete'}
                  onPress={() => {
                    setCount(count + 1);
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    // alignItems:"flex-end"
    // flexDirection:"row"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent:"center"
  },
  text: {width: wp(20), padding: 5, backgroundColor: '#3f51b5'},
  productBanner: {
    padding: 15,
    // alignItems:"center",
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 2,
    shadowColor: '#000',
    // shadowOffset: { width: 20, height: 60 },
    shadowOpacity: 0.8,
    // shadowRadius: 12,
    elevation: 1,

    backgroundColor: 'white',
    width: wp(95),
    marginBottom: 20,
  },
});
export default AllProduct;
