import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface SimpleCardProps {
  data: {
    name: any;
    image: {
      medium: any;
    };
  };
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: 200,
    marginRight: 20,
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    paddingBottom: 20,
  },
  imageStyle: {
    borderRadius: 6,
    resizeMode: 'cover',
  },
});

/**
 * This should be a React Native component that, at the very least, comprises an image component a title and a description or subheading.
 * Consider the amount of space on a device when positioning elements...
 * Types/Interfaces should be defined in a separate module and imported here
 * @param props SimpleCardProps
 * @returns the SimpleCard component - a JSX.Element/ReactNode
 */
export const SimpleCard = (props: SimpleCardProps) => {
  const imageUrl = {uri: props.data.image.medium};

  return (
    <View>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={imageUrl as ImageSourcePropType}
          style={styles.image}
          imageStyle={styles.imageStyle}
        />
      </View>
      <Text>{props.data.name}</Text>
    </View>
  );
};

export default SimpleCard;
