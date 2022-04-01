import {StyleSheet} from 'react-native';

export const st_typography = StyleSheet.create({
  header1: {
    fontSize: 96,
    lineHeight: 100,
    paddingTop: 18,
    fontFamily: 'TisaLight',
  },
  header2: {
    fontSize: 60,
    lineHeight: 55,
    paddingTop: 18,
    fontFamily: 'TisaLight',
  },
  header3: {
    fontSize: 48,
    lineHeight: 45,
    paddingTop: 5,
    fontFamily: 'TisaRegular',
  },
  header4: {
    fontSize: 34,
    lineHeight: 32,
    paddingTop: 4,
    fontFamily: 'TisaRegular',
  },
  header5: {
    fontSize: 24,
    lineHeight: 26,
    fontFamily: 'TisaRegular',
  },
  header6: {
    fontSize: 20,
    lineHeight: 24,
    paddingTop: 1,
    fontFamily: 'TisaMedium',
  },
  subTitle1: {
    fontSize: 16,
    lineHeight: 17,
    fontFamily: 'TisaMedium',
  },
  subTitle2: {
    fontSize: 14,
    lineHeight: 14,
    paddingTop: 2,
    fontFamily: 'TisaMedium',
  },
  body: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'TisaRegular',
  },
  smallBody: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'TisaRegular',
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'TisaRegular',
  },
  overline: {
    fontSize: 10,
    lineHeight: 11,
    fontFamily: 'TisaRegular',
    textTransform: 'uppercase',
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'TisaMedium',
    textTransform: 'capitalize',
  },
});

export type TypografyTypes = typeof st_typography;
