// Add to here reducers types

declare interface InAuth {
  userToken: string;
  dateLogin: string;
  userType: string;
  dataUser: {
    id: string;
    email: string;
    name: string;
    language: 'EN' | 'ES';
  }
}

declare interface InGlobal {
  mode: 'light' | 'dark';
  screenSize: number;
  showModal: boolean;
  currentScreen: string;
}

declare interface MainState {
  auth: InAuth;
  global: InGlobal;
}
