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
                    {/* {state 또는 porp} */}
      <Text>You clicked {count} times</Text>
               {/* state변경함수명(변경할state값) */}
               {/* state 변경하면 화면이 다시 렌더링됨 */}
      <Button onPress={() => setCount(count+1)} title="Click me!"></Button>

    </View>
  )
}

export default Counter;