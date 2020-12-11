import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Avatar, Accessory} from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Modal from 'react-native-modal';
import {Button, FilledButton} from '../../components';
import {Input} from '../../components';
import {Heading} from '../../components';
import Slider from '@react-native-community/slider';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function ProfileScreen({navigation}) {
  const [state, setState] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const imageByCamera = () => {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setModalVisible(false);
        setState(source);
        console.log("source");

        console.log(source);
      }
    });
  };

  const imageByGallery = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setModalVisible(false);
        setState(source);
        console.log("source");

        console.log(state);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Modal
        onRequestClose={() => {
          setModalVisible(false);
        }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // width={wp(90)}
        // height={hp(90)}
      >
        <View style={styles.centeredView}>
          {/* <Button
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Button> */}
          <View style={styles.modalView}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 10,
              }}>
              <Text style={{fontSize: 18, color: 'grey', fontWeight: 'bold'}}>
                Choose Image From
              </Text>
              <MaterialCommunityIcons
                onPress={() => setModalVisible(false)}
                name="window-close"
                color="grey"
                size={30}
              />
            </View>

            <View
              style={{
                width: wp(90),
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-around',
              }}>
              <View>
                <MaterialCommunityIcons
                  onPress={imageByCamera}
                  name="camera"
                  color="#428bca"
                  size={60}
                />
                <Text style={styles.text}>Camera</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  onPress={imageByGallery}
                  name="image"
                  color="#428bca"
                  size={60}
                />
                <Text style={styles.text}>Gallery</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Heading>Profile Screen</Heading> */}
      <View style={{height:hp(30),width:wp(100),alignItems:"center",justifyContent:"center"}}>
      <Image     blurRadius={1}
 source={{uri:"https://image.shutterstock.com/image-photo/black-wall-texture-rough-background-260nw-1450341161.jpg"}} style={styles.backgroundImage} />

        {/* <Image
          source={{state }}
          style={styles.profileImage}
        /> */}
        <View style={{flexDirection:"row"}}>
        <Avatar
          size={hp(20)}
          // onPress={
          //   test
          // }
          // onAccessoryPress={() => alert('test')}
          //  imageProps={{resizeMode: 'cover'}}
          activeOpacity={0.7}
          //  style={styles.profileImage}
          avatarStyle={{ borderWidth: 2, borderColor: 'skyblue', borderStyle:'solid' }}

          rounded
          source={state}>
          {/* <Accessory  onAccessoryPress={() => alert('test')} /> */}
        </Avatar>
        <View>
          <MaterialCommunityIcons
            onPress={() => setModalVisible(true)}
            name="image-edit"
            color="white"
            backgroundColor="red"
            size={25}
          />
          {/* <MaterialCommunityIcons onPress={ imageByGallery } name="image" color="#428bca" size={40} /> */}
        </View>
        </View>
      </View>
      <View style={styles.profileHeader}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <CustomText style={styles.text}>Demo Shop</CustomText> */}
          <Text style={styles.headerText}>Shop Name</Text>
          <View style={styles.shopInfo}>
            <MaterialCommunityIcons name="home" color="#428bca" size={20} />

            <Input style={styles.input} placeholder="Shop Name" />
          </View>
          <Text style={[styles.headerText, {marginTop: 25}]}>Shop Address</Text>
          <View style={styles.shopInfo}>
            <MaterialCommunityIcons
              name="map-marker"
              color="#428bca"
              size={20}
            />

            <Input style={styles.input} placeholder="Shop Address" />
          </View>
          <Text style={[styles.headerText, {marginTop: 25}]}>Contact No</Text>
          <View style={styles.shopInfo}>
            <MaterialCommunityIcons name="phone" color="#428bca" size={20} />

            <Input style={styles.input} placeholder="Contact No" />
          </View>
          <View>
            <Text style={[styles.headerText, {marginTop: 25}]}>

              Set the delivery range ( <MaterialCommunityIcons name="truck-delivery-outline" color="#428bca" size={15} /> )
            </Text>

            <View style={styles.slider}>
              <Slider
                style={{
                  width: wp(80),
                  height: 40,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}
                step={0.5}
                minimumValue={1}
                value={sliderValue}
                //color={"red"}
                onValueChange={(val) => setSliderValue(val)}
                maximumValue={5}
                thumbTintColor="rgb(252, 228, 149)"
                maximumTrackTintColor="#d3d3d3"
                minimumTrackTintColor="rgb(252, 228, 149)"
                //thumbImage="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
              />
              {/* <Text>Value: {sliderValue}</Text> */}
              <Text style={styles.colorYellow}>{sliderValue + 'km'}</Text>
            </View>
          </View>
          <View style={{alignItems:"center",marginTop:10}}>
          <Button variant="info" size="small" onPress={() => {
         //navigation.navigate('Home')    
         navigation.navigate("AddProduct")
      }} >Submit</Button>
      </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slider: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // alignContent:"center",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    // paddingTop: hp(3),
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.1)'
    // padding: 20,
    
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: wp(90),
    height: hp(30),
    //  flexWrap: 'wrap',
  },
  textCon: {
    width: wp(20),
    flexDirection: 'row',
    alignContent: 'center',
  },
  colorGrey: {
    color: '#d3d3d3',
    paddingLeft: 12,
    paddingRight: 12,
  },
  colorYellow: {
    color: 'rgb(252, 228, 149)',
  },
  // modalView: {
  //   // margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   width: wp(90),
  //   height: hp(30),
  //   flexWrap: 'wrap',
  // },
  // openButton: {
  //   backgroundColor: '#F194FF',
  //   borderRadius: 20,
  //   padding: 10,
  //   // elevation: 2
  // },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  profileImage: {
    width: wp(40),
    height: hp(20),
    // borderRadius: 50,
    alignItems: 'center',
  },
  profileHeader: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius:10,
    // paddingLeft:15,
    padding: 10,
    // paddingRight:15,
    // marginTop: 10,
    // paddingLeft:15,
    // paddingRight:15,
  },
  shopInfo: {
    // marginTop:10,
    flexDirection: 'row',
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 1,
  },
  headerText: {
    // fontWeight:"bold",
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    padding: 0,
    backgroundColor: 'transparent',
    //  borderBottomColor:"#428bca",
    //  borderBottomWidth:1,
    paddingLeft: 10,
  },
  text: {
    textAlign: 'center',
    color: 'grey',
  },
  backgroundImage: {
    // height:100,
    // width:100,
    // width:wp(100),
    // resizeMode: "cover",
    // flex: 1,
    // width: null,
    // height: null,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.7
    
  }
});

export default ProfileScreen;

