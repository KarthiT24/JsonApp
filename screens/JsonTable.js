import React, { useState } from 'react';
import { StyleSheet, View, ScrollView ,Dimensions } from 'react-native';
import { Table, Row } from 'react-native-table-component';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const JsonTable = ({data}) => {
    let headers = [];
    data.forEach(item => {
      headers = headers.concat(Object.keys(item));
    });
    headers = [...new Set(headers)]; // Get unique headers
  
    const rows = data.map(item => {
      const rowData = headers.map(header => item[header] || '');
      return rowData;
    });
  
  const [tableHead] = useState(headers);
  let size=[];
  headers.forEach(element => {
    size.push(100);
  });
 
  const [widthArr] = useState(size
    );
    
  const tableData = [];
  for (let i = 0; i < rows.length; i += 1) {
    let rowData = [];
    rows[i].forEach(element => {
        rowData=rowData.concat(element);
    });
    tableData.push(rowData);
    }
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 0.5, borderColor: '#C1C0B9' }}>
                <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 0.5, borderColor: '#C1C0B9' }}>
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      );
  }





const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#fff',
    },
    header: {
        height: windowHeight * 0.07, // Adjust according to your preference
        backgroundColor: '#537791',
    },
    text: {
        textAlign: 'center',
        fontWeight: '100',
        fontSize: windowWidth * 0.04, // Adjust according to your preference
    },
    dataWrapper: {
        marginTop: -1,
    },
    row: {
        height: windowHeight * 0.05, // Adjust according to your preference
        backgroundColor: '#E7E6E1',
    },
});


export default JsonTable;
