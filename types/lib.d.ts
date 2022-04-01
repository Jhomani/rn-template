// import {InGlobalState} from '@redux/global/reducer';

declare module '*.png' {
  const value: string;
  export default value;
}

// routers
declare type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome: undefined;
  Home: undefined;
};

declare type AuthStackParamList = {
  Home: {userId: string};
  Login: undefined;
  Register: undefined;
  Setting: undefined;
};

// redux
declare type Action = {
  type: string;
  payload: any;
};

declare interface PromiseAcc {
  res: (value: unknown) => void;
  rej: (value: unknown) => void;
}
