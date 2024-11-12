import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Index() {
  const [dataVehicles, setDataVehicles] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://11.11.15.241/api/vehicles');
      const data = await response.json();
      setDataVehicles(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View>
        {dataVehicles ? (
          dataVehicles.map((vehicles, key) => (
            <View key={key}>
              <Text>{vehicles.plat_nomor}</Text>
              <Text>{vehicles.plat_merek}</Text>
              <Text>{vehicles.model}</Text>
              <Text>{vehicles.tahun}</Text>
              <Text>{vehicles.keterangan}</Text>
            </View>
          ))
        ) : (
          <ActivityIndicator size="large" color="#007bff" />
        )}
      </View>
    </ScrollView>
  );
}
