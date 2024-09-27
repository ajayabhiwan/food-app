import React, { useEffect } from 'react'
import {View,Text, StatusBar,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
    const ring1padding = useSharedValue(0)
    const ring2padding = useSharedValue(0)
    const navigation = useNavigation()
    useEffect(()=>{
        ring1padding.value=0
        ring2padding.value=0

        setTimeout(()=>  ring1padding.value =withSpring(ring1padding.value+hp(5)),100)
        setTimeout(()=>  ring2padding.value =withSpring(ring2padding.value+hp(5.5)),300)
           
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
       
    },[])
  return (
    <>
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content"></StatusBar>
      <Animated.View className="bg-white/20 rounded-full" style={{padding:ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding:ring1padding}}>
            <Image source={require("../images/mealpic.jpg")} style={{width:hp(20),height:hp(20)}} />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text style={{fontSize:hp(7)}} className="text-white font-bold tracking-widest ">Foody</Text>
        <Text style={{fontSize:hp(4)}} className="text-white font-medium tracking-widest">Food is always good</Text>
        
      </View>
    </View>
    </>
  )
}

export default WelcomeScreen