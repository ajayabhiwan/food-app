import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFormik } from 'formik'
import React from 'react'
import { Button, TextInput,View,ToastAndroid } from 'react-native'


const RegisterScreen = () => {
    const formik = useFormik({

        initialValues:({
            email:"",
            name:"",
            password:""
        }),
        onSubmit:async(values)=>{
            try {
                console.log("values----in registrered ",values);
            await AsyncStorage.setItem("registered",JSON.stringify(values))
            ToastAndroid.showWithGravityAndOffset(
                `data registered successfully`,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              );
            } catch (error) {
                console.log(error.message);
            }


        }
    })
  return (
    <View>
        <View>
            <TextInput className="" placeholder='enter your name' onChangeText={formik.handleChange('name')} value={formik.values.name} />
        </View>
        <View>
            <TextInput className="" placeholder='enter your email' onChangeText={formik.handleChange('email')} value={formik.values.email} />
        </View>
        <View>
            <TextInput className="" placeholder='enter your password' onChangeText={formik.handleChange('password')}value={formik.values.password}  />
        </View>
        <View>
           <Button title='Login' className="bg-slate-900" onPress={formik.handleSubmit}></Button>
        </View>
    </View>
  )
}

export default RegisterScreen