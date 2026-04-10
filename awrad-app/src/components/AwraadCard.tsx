import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AwradCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.tag}>RECOMMENDED FOR MORNING</Text>

        <Text style={styles.title}>Awrad-i-Fatiha</Text>

        <Text style={styles.description}>
          A spiritual litany of remembrance and protection.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF5F0', // tonal background
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30, // extra rounded
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',

    // soft shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  tag: {
    fontSize: 12,
    color: '#FD8950', // secondary accent
    letterSpacing: 1.2,
    marginBottom: 12,
    fontWeight: '500',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#9B3F09', // primary accent
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#6B4F3A',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#FD8950',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 999, // pill shape
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
