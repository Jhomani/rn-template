import React, { useEffect } from 'react';
import {
  ScrollView, 
} from "react-native";

import {
  Button, 
  Title, 
  SubTitle, 
  Text,
} from '@components/main'

import {Plus} from '../../icons'

export const Texting = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {

    return () => {
      console.log('Login unmountes');
    }
  }, []);

  const handleFocus = (ev: any) => {
    // console.log(ev.nativeEvent)
    // Keyboard.dismiss();
  }

  const hideModal = ()  => {
    setRefreshing(false)
  }


  console.log('re-render... into loging')

  return (
    <>
      <ScrollView 
        onScrollEndDrag={handleFocus}
        // stickyHeaderIndices={[]}
        style={{position: 'relative', overflow: 'scroll'}} 
        // scrollEnabled={false}
        // disableIntervalMomentum={true}
        // disableScrollViewPanResponder={true}
      >
      <Title>Title 1</Title>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3 </Title>
      <Title level={4}>Title 4</Title>
      <Title level={5}>Title 5</Title>
      <Title level={6}>Title 6 y</Title>

      <SubTitle >SubTitle 1</SubTitle>
      <SubTitle level={2}>SubTitle 2</SubTitle>

      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at. &nbsp; .&perp; &#36; yy 
      </Text>

      <Text type='smallBody'>Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at. &nbsp; .&perp; &#36; yy 
      </Text>

      <Text type="caption">Caption</Text>
      <Text type="overline">overline</Text>

        <Button
          type='primary'
          icon={<Plus size={12} />}
          onPress={() => setRefreshing(true)}
          content="te afgua mean with you"
        />
      </ScrollView>
    </>
  );
};