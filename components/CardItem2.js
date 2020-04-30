import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardItem = ({
  
  image,
  name,
  status,
  //variant
}) => {
  // Custom styling
  //const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 10,
      height: 180,
      width: 155,
      alignItems:'center'
    }
  ];

  const nameStyle = [
    {
      paddingTop: 10,
      color: 'red',
      justifyContent: 'center',
      alignItems:'center',
      fontWeight: 'bold'
    }
  ];

  return (
    <View style={styles.containerCardItem2}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      
      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

     
    </View>
  );
};

export default CardItem;
