import Wrapper from '@screens/Wrapper';
import {Button, Text} from '@src/components';
import React, {useEffect} from 'react';
import {Keyboard, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {LoginProps} from './types';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});

export const Login = (props: LoginProps) => {
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    return () => {
      console.log('Login unmountes');
    };
  }, []);

  const handleFocus = (ev: any) => {
    // console.log(ev.nativeEvent)
    // Keyboard.dismiss();
  };

  const hideModal = () => {
    setRefreshing(false);
  };

  const handlePress = async () => {
    console.log('Button pressed');

    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const decoded = await data.json();

    console.log(decoded);
    // props.navigation.navigate('Setting');
  };

  console.log('re-render... into loging');

  return (
    <Wrapper>
      <ScrollView
        onScrollEndDrag={handleFocus}
        // stickyHeaderIndices={[]}
        style={{position: 'relative', overflow: 'scroll'}}
        // scrollEnabled={false}
        // disableIntervalMomentum={true}
        // disableScrollViewPanResponder={true}
      >
        <View style={{overflow: 'hidden', borderRadius: 20}}>
          <Svg height="150" width="100%">
            <Defs>
              <LinearGradient id="mygrad" x1={0} x2={0} y1={0} y2={1}>
                <Stop offset={0.2} stopColor="#ff0" stopOpacity={1} />
                <Stop offset={1} stopColor="#f00" stopOpacity={1} />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#mygrad)" />
          </Svg>
        </View>

        <Button onPress={handlePress} type="primary" content="To Setting" />

        <TextInput
          style={style.input}
          placeholder="Click here…"
          onSubmitEditing={Keyboard.dismiss}
          onFocus={handleFocus}
        />

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          maiores pariatur nihil architecto corporis aliquid impedit voluptatum,
          voluptatem ab, temporibus quas odio. Temporibus, error. Ex, fugit!
          Consequuntur, aut dolor at facilis veritatis assumenda accusantium
          ipsa culpa similique ex vel molestiae.
        </Text>
      </ScrollView>
    </Wrapper>
  );
};
