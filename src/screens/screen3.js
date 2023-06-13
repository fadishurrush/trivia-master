import { View, StyleSheet, Text } from 'react-native';
import MainContain from '../components/MainContain';



const Screen3 = () => {
  
 

  return (
    <MainContain>
      <View>
        <Text style={styles.allText}>مبروك الفوز</Text>
        <Text style={styles.allText}>اذهب لاستلام جائزتك</Text>
      </View>

  
    </MainContain>
  );
};

const styles = StyleSheet.create({
  allText: {
    color: '#4EE530',
    fontSize: 40,
  },
});

export default Screen3;
