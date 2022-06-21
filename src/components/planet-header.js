import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from './text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';

export default function PlanetHeader({ backBtn }) {
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable>
          <AntDesign name="left" size={18} color="black" />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
