import { View, Text, TextInput, Image, ScrollView, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import ButtonDefault from '../components/Button';
import { Link } from 'expo-router';
import { normalize } from '@/utils/fontsize';

const index = () => {
  return (
    <ScrollView  style={{backgroundColor: '#1E1E1E'}}>
      <View style={styles.contentBanner}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.topLogin}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subTitle}>Login to manager your account</Text>
        </View>
        <View style={styles.contentForm}>
          <Text style={styles.inputName}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder='email@exemplo.com'
            placeholderTextColor='#858585'
          />
          <Text style={styles.inputName}>Password</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder='*********'
            placeholderTextColor='#858585'
          />
        </View>
        <View style={styles.contentForgot}>
          <Link href={'/(teste)'}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </Link>
        </View>
        <View style={styles.btnLogin}>
          <ButtonDefault text="Login" />
        </View>
        <View style={styles.contentSocialLogin}>
          <View style={styles.contentMore}>
            <View style={styles.lineTextMore} />
            <View>
              <Text style={styles.textMore}>or</Text>
            </View>
            <View style={styles.lineTextMore} />
          </View>
          <View style={styles.socialLogin}>
            <Pressable style={styles.boxButtonGoogle} onPress={() => alert('Left button pressed')}>
              <Text style={styles.buttonText}>Google</Text>
            </Pressable>
            <Pressable style={styles.boxButtonFacebook} onPress={() => alert('Left button pressed')}>
              <Text style={styles.buttonText}>Facebook</Text>
            </Pressable>
          </View>
          <View style={styles.createAccount}>
            <Text>
              Don't have an account? 
              <Link href={'/(teste)'}>
                <Text style={styles.createAccountLink}> Sign Up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentBanner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15%',
    color: 'white',
    fontSize: 12,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 40
  },
  contentSocialLogin: {
    paddingTop: 25
  },
  contentMore: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  lineTextMore: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#858585'
  },
  textMore: {
    width: 50, 
    textAlign: 'center',
    fontSize: normalize(13),
    color: '#858585'
  },
  boxButtonGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#858585",
    width: '45%',
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1
  },
  boxButtonFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#858585",
    width: '45%',
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1
  },
  buttonText: {
    color: '#000',
    fontWeight: '400',
    fontSize: normalize(13)
  },
  banner: {
    display: 'flex',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 50
  },
  topLogin: {
    backgroundColor: '#fff',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: {
    color: '#000',
    fontSize: normalize(25),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: normalize(11),
    paddingTop: 5
  },
  contentTitle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },
  contentForm: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 30
  },
  inputName: {
    color: '#000',
    fontSize: normalize(12),
    paddingBottom: 10,
    paddingTop: 10,
  },
  input: {
    display: 'flex',
    width: '100%',
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#858585',
    color: '#858585',
    fontSize: normalize(12)
  },
  contentForgot: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 25,
    paddingBottom: 25
  },
  btnLogin: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#5AABB5',
    fontSize: normalize(10),
    fontWeight: 'bold'
  },
  createAccount: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 40,
    fontSize: normalize(13),
    color: '#858585',
    paddingBottom: 50
  },
  createAccountLink: {
    color: '#5AABB5',
    fontWeight: 'bold'
  }
})

export default index;