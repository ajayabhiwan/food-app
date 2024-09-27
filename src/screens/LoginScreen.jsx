
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Text, TextInput, View ,Alert , ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {

    const [emailvalue,setemailvalue] = useState("")
    const navigation = useNavigation()
    const formik = useFormik({
        initialValues:({
            email:"",
            password:""
        }),
        onSubmit:async(values)=>{
           try {
            console.log("values",values)
           const data = await AsyncStorage.getItem("registered");
           const data1 = JSON.parse(data);
           console.log("data1---",data1)

           if(values.email === data1.email && values.password === data1.password){
            ToastAndroid.showWithGravityAndOffset(
                            `Login successfully` ,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            0,
                            70,
             );

             setTimeout(()=>{
                navigation.navigate('RegisterForm')
             },5000)

           }
           else{
            ToastAndroid.showWithGravityAndOffset(
                `Invalid userId and Password` ,
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                0,
                70,
              );
           }
            
           } catch (error) {
            console.log(error.message)
           } 

        }
    })

    // const getdata = async()=>{
    //     try {
    //        let data= await AsyncStorage.getItem("data")
    //         console.log("data found successfully",JSON.parse(data))
    //         let data1 = JSON.parse(data)
    //         ToastAndroid.showWithGravityAndOffset(
    //             `${data1.email}` ,
    //             ToastAndroid.LONG,
    //             ToastAndroid.TOP,
    //             0,
    //             70,
    //           );
          
    //         console.log("data1",data1.email)
    //         console.log("data1.password,",data1.password)
            
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // const navigate = ()=>{
    //     navigation.navigate('RegisterForm')
    // }


  return (
    <>
    <View className="flex mx-4 justify-center items-center p-4">
        <Text className=" p-2 text-slate-950" style={{fontSize:40}}>Hello this is Login Screen </Text>
     
       <View>
            <TextInput className="text-gray-800 w-100 border-slate-800 "style={{borderColor:"red",}} placeholder='Enter your Email'   onChangeText={formik.handleChange('email')} value={formik.values.email}></TextInput>
        </View>
        <View className="mt-4">
            <TextInput className="text-gray-800 w-100 border-slate-800 "style={{borderColor:"red",}} placeholder='Enter your password'   onChangeText={formik.handleChange('password')}  value={formik.values.password}></TextInput>
        </View>
        <Button title='Login' className="mt-4" onPress={formik.handleSubmit}></Button>
        
        {/* <View className="mt-4 p-4">
        <Button title='getdata' className="mt-4 p-4" onPress={getdata}></Button>
        </View> */}
        {/* <View className="mt-4 p-4">
        <Button title='navigate' className="mt-4 p-4" onPress={navigate}></Button>
        </View> */}
    </View>
    </>
  )
}

export default LoginScreen