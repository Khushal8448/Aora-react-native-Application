import { View, Text } from "react-native";
import React from "react";

const FormField = ({ title, value, otherStyles, handleChangeText, placeholder, ...props }) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">FormField</Text>
    </View>
  );
};

export default FormField;
