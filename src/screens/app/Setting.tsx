import React, { useState, useRef } from 'react';
import {Text, Title, Switch} from '@src/components';
import {View, Pressable} from 'react-native';
import {Setting, Theme} from '@src/icons';
import {dimensions} from '@utils/global'

interface InSetting {
  children: JSX.Element;
}

export const Settings = (props: InSetting) => {
  const {} = props;
  const [state, setState] = useState(false);

  return (
    <View style={{
      width: dimensions.width - 30,
      alignSelf: 'center'
    }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%',
      }}>
        <Setting style={{marginBottom: 15}} size={65} />
        <Text type="caption" >
          Settings
        </Text>
      </View>

      <View style={{
        height: .5,
        width: '100%',
        backgroundColor: '#BDBDBD', 
      }}/>

      <Pressable style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 48,
        paddingHorizontal: 10,
        backgroundColor: '#0000000E',
      }}
      onPress={() => {setState(!state); console.log('checked')} } 
      >
        <View style={{
          width: 20,
          justifyContent: 'center',
        }}>
          <Theme />
        </View>
        <View style={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 10
        }}>
          <Text type="body">Dark Theme</Text>
        </View>
        <View style={{
          width: 30,
          justifyContent: 'center',
        }}>
          <Switch checked={state} onChange={val=>setState(val)} />
        </View>
      </Pressable>


      <Text type="smallBody" >
        Settings into bar
      </Text>
    </View>
  );
}