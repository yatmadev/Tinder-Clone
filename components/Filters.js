import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon name="md-funnel" size={15} /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
