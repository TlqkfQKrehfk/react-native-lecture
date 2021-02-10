// React Native Counter Example using Hooks!

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  // UI의 데이터 부분을 변경할때 필요한 변수 state
  // const [state명, state변경함수명] = useState(state초기값)
  const [count, setCount] = useState(0);

  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text></Text>
      <Button></Button>

    </View>
  )
}

export default Counter;