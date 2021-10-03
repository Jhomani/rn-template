declare interface MainState {
  auth: {
    userToken: string;
    dateLogin: string;
    userType: string;
    dataUser: {
      id: string;
      email: string;
      name: string;
      language: 'EN' | 'ES';
    }
  };
  global: {
    mode: string;
    screenSize: number;
    showModal: boolean;
    currentScreen: string;
  };
}

declare interface DefaultRootState {
  auth: {
    userToken: string;
    dateLogin: string;
    userType: string;
    dataUser: {
      id: string;
      email: string;
      name: string;
      language: 'EN' | 'ES';
    }
  };
  global: {
    mode: string;
    screenSize: number;
    showModal: boolean;
  };
}
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