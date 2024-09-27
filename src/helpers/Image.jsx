import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Animated from 'react-native-reanimated'
const CachedImage = (props) => {
    const [cachedSource,setCachedSource] = useState(null);
    const {uri} = props

    useEffect(()=>{
        const getCachedImage = async()=>{
            try {
                const chachedImageData = await AsyncStorage.getItem(uri)
                console.log("chaedimagedata value---",chachedImageData)
                if(chachedImageData){
                    setCachedSource({uri:chachedImageData})
                }else{
                    const response = await fetch(uri)
                    const imageBlob = await response.blob()
                    const base64Data = await new Promise((resolve)=>{
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob)
                        reader.onloadend = ()=>{
                            resolve(reader.result)
                        }
                    })

                    await AsyncStorage.setItem(uri,base64Data);
                    setCachedSource({uri:base64Data})
                }
            } catch (error) {
                console.log("chached image error",error.message)
                setCachedSource({uri})
            }
        }

        getCachedImage()

    },[])
  return (
     <Animated.Image source={cachedSource} {...props}/>
  )
}

export default CachedImage