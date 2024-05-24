import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const App = () => {
  const [uploaded, setUploaded] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/json', // Specify the file type you want to pick
        copyToCacheDirectory: false, // This ensures we get the URI to the actual file
      });

      if (result.type === 'success') {
        // Handle the picked file
        const jsonContent = await readJsonFile(result.uri);
        setJsonData(jsonContent);
        setUploaded(true); // Indicate that the file has been uploaded
      }
    } catch (error) {
      console.log('Error picking file:', error);
    }
  };

  // Function to read JSON file content
  const readJsonFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const jsonContent = await response.json();
      console.log(jsonContent);
      return jsonContent;
    } catch (error) {
      console.log('Error reading file:', error);
      return null;
    }
  };

  return (
    <View style={{ flex: 1}}>
      <Button title="Pick JS" onPress={pickFile} />
      {uploaded ? (
        <Text style={{ marginTop: 20 }}>File Uploaded Successfully!</Text>
      ) : null}
      {jsonData && (
        <View style={{ marginTop: 20 }}>
          <Text>JSON data:</Text>
          <Text>{JSON.stringify(jsonData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
