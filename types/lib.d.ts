// import {InGlobalState} from '@redux/global/reducer';

declare module "*.png" {
  const value: string;
  export default value;
}

// routers
declare type RootStackParamList = {
  Home: {userId: string};
  Welcome: undefined;
};

declare type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};


// redux
declare type Action = {
  type: string;
  payload: any 
}

declare interface PromiseAcc {
  res: (value: unknown) => void;
  rej: (value: unknown) => void;
}