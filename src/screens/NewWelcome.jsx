import { DarkTheme } from '@react-navigation/native'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const NewWelcome = () => {
  return (
    <SafeAreaView className="flex bg-slate-700 " style={{width:"100%",height:"100%"}} >
       <View className="flex  justify-around my-4  mt-4 ">
          <Text className=" text-center mt-4  " style={{fontSize:30,fontWeight:"bold"}}>Lets Get Started !</Text>
          <View className="flex-row justify-center mt-20">
            <Image source={require("../images/login.png")} style={{width:400,height:400}} className="rounded-full" />
          </View>
          <View className="space-y-2">
            <TouchableOpacity className="py-3  bg-amber-400 mt-20 rounded-2xl w-80 ml-10 ">
                <Text className="text-center font-bold">Signup</Text>
                
            </TouchableOpacity>
            <View className="flex-row justify-center">
                <Text className="text-white font-semibold">Already have an account</Text>
                <TouchableOpacity>
                    <Text className="text-amber-400 font-semibold ml-2">Log in</Text>
                </TouchableOpacity>
            </View>
          </View>
       </View>
    </SafeAreaView>
  )
}

export default NewWelcome