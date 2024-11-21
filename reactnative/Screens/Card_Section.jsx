import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Card_Section = ({title,desc,img}) => {
  return (
   
    <LinearGradient
        colors={['rgba(0,0,0,1)', ' rgba(47,49,120,1) ']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.OrderDetail}>
          
       
            <View style={{flex: 1.5, gap: 5}}>
                <Text style={{fontSize: 18, fontWeight: 'bold',color:'#fff'}}>
                {title}
                </Text>
                <Text style={{color: '#919191'}}>
                  {desc}
                </Text>
              </View>
              <View style={styles.orderImage}>
                <Image source={img} style={styles.OrderImg} />
              </View>
            
      </LinearGradient>

  )
}

export default Card_Section

const styles = StyleSheet.create({
    OrderDetail: {
        height: 300,
        width: '100%',
        backgroundColor: '#919191',
        marginHorizontal: 'auto',
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 15,
      },
      orderImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      OrderImg: {
        height: 150,
        width: 150,
      },

})