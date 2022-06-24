import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from '../svg';

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text
        preset="small"
        style={{ textTransform: 'uppercase', color: colors.grey }}
      >
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

// export default function Details({ navigation, route }) {
export default function Details({ route }) {
  const planet = route.params.planet;
  console.log(planet);
  const renderImage = () => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />;
      case 'venus':
        return <VenusSvg />;
      case 'earth':
        return <EarthSvg />;
      case 'mars':
        return <MarsSvg />;
      case 'jupiter':
        return <JupiterSvg />;
      case 'saturn':
        return <SaturnSvg />;
      case 'uranus':
        return <UranusSvg />;
      case 'neptune':
        return <NeptuneSvg />;
      default:
        return <></>;
    }
  };

  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true}></PlanetHeader>
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>

        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <View style={{ height: 40 }} />

        <PlanetSection title="Rotation Time" value={rotationTime} />
        <PlanetSection title="Revolution Time" value={revolutionTime} />
        <PlanetSection title="Radius" value={radius} />
        <PlanetSection title="Avg Temp" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    // padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    marginTop: spacing[5],
    textAlign: 'center',
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderColor: colors.grey,
    borderWidth: 1,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
