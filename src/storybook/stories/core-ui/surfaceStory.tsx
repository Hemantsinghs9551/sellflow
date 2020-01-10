import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Surface } from '../../../core-ui';
import { COLORS } from '../../../constants/colors';
import { FONT_SIZE, FONT_FAMILY } from '../../../constants/fonts';

export default function SurfaceStory() {
  return storiesOf('Surface', module).add('Surface', () => (
    <View style={styles.container}>
      <Surface>
        <Text style={styles.title}>{'Anna Belle'}</Text>
        <Text>
          {
            'Jl. Scientia Boulevard, Curug Sangereng, Kec. Klp. Dua, Tangerang, Banten 15810'
          }
        </Text>
        <Text>{'0876123987'}</Text>
      </Surface>
      <Surface mode="row">
        <Text>{'Delivered'}</Text>
        <View
          style={[
            styles.indicator,
            { backgroundColor: COLORS.orderStatusDelivered },
          ]}
        />
      </Surface>
      <Surface mode="row">
        <Text>{'On Courier'}</Text>
        <View
          style={[
            styles.indicator,
            { backgroundColor: COLORS.orderStatusOnProcess },
          ]}
        />
      </Surface>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.medium,
  },
  title: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.large,
  },
});