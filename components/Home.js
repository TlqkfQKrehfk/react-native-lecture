import React from 'react';
import { Text, View, Button } from 'react-native';


// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다
// JSX를 쓸려면 improt React from 'react';
const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Home</Text>
      <Button 
          title = "Go to Details" 
          onPress={()=>{navigation.navigate("Details", {id: 1})}}
      />
    </View>
  )
  
}
export default Home;