import React from 'react';
import { Button, Text, View } from 'react-native';


// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다

// JSX를 쓸려면 improt React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달 됨
const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>List</Text>
        <Button 
          title = "Go to Details" 
          onPress={()=>{navigation.navigate("Details", {id: 1})}}
        />
    </View>
  )
}

export default List;