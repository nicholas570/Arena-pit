import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

if (localStorage.getItem('Token') === null) {
  localStorage.setItem('Token', 100);
}
export const Wallet = createContext({
  walletToken: parseInt(localStorage.getItem('Token'), 10),
  seWallet: () => {},
});

export const WalletProvider = ({ children }) => {
  const refreshWallet = (token) => {
    // eslint-disable-next-line no-use-before-define
    setwallet({ ...wallet, walletToken: token });
    localStorage.setItem('Token', token);
  };

  const initWallet = {
    walletToken: parseInt(localStorage.getItem('Token'), 10),
    seWallet: refreshWallet,
  };

  const [wallet, setwallet] = useState(initWallet);
  return <Wallet.Provider value={wallet}>{children}</Wallet.Provider>;
};

WalletProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
