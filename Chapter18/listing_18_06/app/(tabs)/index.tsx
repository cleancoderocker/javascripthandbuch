import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://localhost:3000/settings');
      const data = await response.json();
      setFirstName(data.firstName);
      setLastName(data.lastName);
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hallo Welt!</Text>
      <TextInput
        style={styles.input}
        onChangeText={(firstName) => setFirstName(firstName)}
        value={firstName}
        placeholder="Vorname"
      />
      <TextInput
        style={styles.input}
        onChangeText={(lastName) => setLastName(lastName)}
        value={lastName}
        placeholder="Nachname"
      />
      <Button
        title="Hier drücken"
        onPress={() => Alert.alert(`Hallo ${firstName} ${lastName}`)}
      />
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    width: '80%',
    padding: 12,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
  },
});
