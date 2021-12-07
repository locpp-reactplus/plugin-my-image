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
  } = attributes;

  if (hidden) {
    return <Fragment />;
  }

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
            uri: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default MyImage;
