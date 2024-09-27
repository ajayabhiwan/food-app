import React from 'react'
import { categoryData } from '../constant/Index';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated ,{ FadeInDown } from 'react-native-reanimated';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import CachedImage from '../helpers/Image';


const Categories = ({categories,isActiveCategory,handleChangeCategory}) => {
    console.log("categories-----value in categories",categories)
    console.log("isActiveCategory",isActiveCategory)
    console.log("setActiveCategory",handleChangeCategory)
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{paddingHorizontal:15}}
        >
         {
            categories.map((category,index)=>{
                let isActive = category.strCategory == isActiveCategory
                console.log("isActive----",isActive)
                let activeButtonClass = isActive ? "bg-amber-400":'bg-black/10'
                console.log("activeButtonClass",activeButtonClass)
                return (
                    <TouchableOpacity
                    key={index}
                    className="flex items-center space-y-1"
                    onPress={()=> handleChangeCategory(category.strCategory)}
                    >
                        <View className={"rounded-full p-[6px] " + activeButtonClass}>
                            {/* <Image source={{uri:category.strCategoryThumb}} 
                            style={{width:hp(6),height:hp(6), marginLeft:20}}
                            className="rounded-full"
                            /> */}
                            <CachedImage  
                            uri={category.strCategoryThumb} 
                            style={{width:hp(6),height:hp(6), marginLeft:20}}
                            className="rounded-full"
                            />
                        </View>
                        <Text className="text-neutral-600" style={{fontSize:hp(1.6) }}>
                            {category.strCategory}
                        </Text>
                    </TouchableOpacity>
                )
           })
         }   
        </ScrollView>
    </Animated.View>
  )
}

export default Categories