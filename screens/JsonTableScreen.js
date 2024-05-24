// JsonTableScreen.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import JsonTable from "./JsonTable";

export default function JsonTableScreen({ route }) {
    const { jsonData } = route.params;

    return (
        <View style={styles.container}>
            <JsonTable data={jsonData} />
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
});
