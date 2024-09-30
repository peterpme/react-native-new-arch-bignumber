import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { BN } from 'react-native-bignumber'

const a = new BN(3274556)
const b = new BN(9856712)
const c = a.mul(b) // 32.276.355.419.872
console.log("c", c)

function fibonacci(n: number): BN {
  let prev = new BN(0)
  let prevPrev = new BN(1)
  let number = new BN(1)

  for (let i = 1; i < n; i++) {
    prevPrev = prev
    prev = number
    number = prevPrev.add(prev)
  }

  return number
}


const f = fibonacci(50) // 12.586.269.025
console.log("f", f.toString())

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#232526', '#66686a']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <View style={{ position: 'absolute', bottom: 50, left: 0, right: 0, alignItems: 'center' }}>
        <Image
          style={{ width: 100, height: 100 }}
          contentFit="contain"
          source="https://raw.githubusercontent.com/expo/styleguide/main/common/logos/word-mark-logo.svg"
        />
      </View>

      <Image
        style={{ width: 200, height: 200 }}
        contentFit="contain"
        source="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
      />

      <Text style={{ fontSize: 22, marginTop: 15, color: '#fff' }}>
        New Architecture: <Text style={{ fontWeight: 'bold' }}>Enabled</Text>
      </Text>

      < StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

