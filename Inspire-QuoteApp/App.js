import { StyleSheet, Text, View } from 'react-native';
import { DailyQuoteCard } from './script';

export default function App() {

  return (
    <View style={styles.container}>
      <DailyQuoteCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
