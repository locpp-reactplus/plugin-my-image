import React, { Fragment } from "react";
import { View, Image, TouchableOpacity } from "react-native";

function MyImage({ attributes, width, height, hidden, onPress, ...rest }) {
  console.log("attributes", attributes);
  console.log("rest", rest);

  const {
    resizeMode,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    opacity,
    source,
  } = attributes;

  if (hidden) {
    return <Fragment />;
  }

  const getSourceImage = () => {
    const defaultSource =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png";
    if (!source) {
      return defaultSource;
    } else if (typeof source === "string") {
      return source;
    } else {
      return (
        source?.url || source?.binding?.options?.placeholderImage || source[0]
      );
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width,
          height,
          opacity,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode,
            borderRadius,
            borderColor,
            borderWidth,
            borderStyle,
          }}
          source={{
            uri: `${getSourceImage()}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default MyImage;
