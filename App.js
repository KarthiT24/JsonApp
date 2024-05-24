import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import JsonTable from 'react-native-json-table';

export default function App() {
  const [url, setUrl] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setJsonData(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button
        title="Generate"
        onPress={fetchData}
      />
      {jsonData && (
        <JsonTable
          json={jsonData}
          style={styles.jsonTable}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  jsonTable: {
    marginTop: 20,
    width: '100%',
  },
});
