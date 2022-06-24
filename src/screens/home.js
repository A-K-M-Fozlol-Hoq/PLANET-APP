import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({ item }) => {
  const navigation = useNavigation();
  const { name, color } = item;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.circle, { backgroundColor: color }]}></View>
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => {
          return item.name;
        }}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
});
