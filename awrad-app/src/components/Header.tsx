import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />

        <TouchableOpacity>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#064e3b',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  spacer: {
    flex: 1,
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
});
