import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AwradCard from '../components/AwraadCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <AwradCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
});
