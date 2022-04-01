import React from 'react';

interface InModalContext {
  content: null | JSX.Element;
  setModal: (v: JSX.Element | null) => void;
}

const initalCtx: InModalContext = {
  content: null,
  setModal: (v) => {},
};

export const ModalContext = React.createContext(initalCtx);
