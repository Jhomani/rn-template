import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';

import {ModalBox} from './ModalBox';
import { OpenModal } from '@src/storage';

interface InModal  {
  children: JSX.Element;
  show: boolean,
  onCancel: Function,
  onAcept?: Function;
  header?: string;
  headerAlign?: 'left' | 'center';
  footerAlign?: 'left' | 'right' | 'center';
  boxtop?: number;
  boxright?: number;
}

export const Modal = (props: InModal) => {
  const {
    show, 
    ...others
  } = props;

  useEffect(() => {
    if(show)
      OpenModal.setModalProps(others); 
    else
      OpenModal.init();
  }, [show])

  return null;
}


export const ModalRoot = () => {
  const {showModal} = useSelector(({global}: MainState) =>global);

  let render = null;

  if(showModal)
    render = <ModalBox />

  return render;
}