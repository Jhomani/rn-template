import {LoginScreenNavigationProp} from '@screens/auth/types'
import storage from '@redux/config';
import { toggleModal } from '@redux/global/accions'

export class Session {
  private static currentNav: LoginScreenNavigationProp;
  private static modalContent: JSX.Element | null;
  public static modalHider: Function;

  static setNav (nav: LoginScreenNavigationProp) {
    this.currentNav = nav;
  }
  static navigateTo (route: string) {
    const to:any = route;

    if(this.currentNav)
      this.currentNav.navigate(to);
  }

  static getModalContent() {
    return this.modalContent;
  }
  static setModalContent(content: JSX.Element, show: boolean) {
    if(show)
      this.modalContent = content;
    else
      this.modalContent = null;

    storage.dispatch(toggleModal(show))
  }
}

 