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

 
export class OpenModal {
  public static children: JSX.Element | null;
  public static onCancel: Function;
  public static onAcept: Function | undefined;
  public static header: string;
  public static headerAlign: 'left' | 'center';
  public static footerAlign: 'left' | 'right' | 'center';
  public static boxtop: number;
  public static boxright: number | undefined;

  static init() {
    this.children = null;
    this.onCancel = () => {};
    this.onAcept = undefined;
    this.header = '';
    this.headerAlign = 'center';
    this.footerAlign = 'right';
    this.boxtop = 50;
    this.boxright = undefined;
  }

  static setModalProps(props: Partial<(typeof OpenModal)> ) {
    this.header =  props.header ?? '',
    this.headerAlign =  props.headerAlign ?? 'center',
    this.footerAlign =  props.footerAlign ?? 'right',
    this.boxtop =  props.boxtop ?? 50,
    this.onCancel = props.onCancel ?? (() => {});

    this.children = props.children ?? null;
    this.boxright = props.boxright;
    this.onAcept = props.onAcept;

    storage.dispatch(toggleModal(true));
  }
}