import Fortmatic from 'fortmatic';
import { ethers } from 'ethers';
import { useCallback, useRef,useEffect, useState } from 'react';
const fm = new Fortmatic('pk_test_79444A2782A3A732', 'rinkeby');
const provider = new ethers.providers.Web3Provider(fm.getProvider());


export default function EthBalance(address) {
    const [balance, setBalance] = useState(0);
    const prevBalanceRef = useRef(0);
    const fetchBalance = useCallback(async () => {
      if (address.length > 0){
        const rawBalance = await provider.getBalance(address);
        const value = parseFloat(ethers.utils.formatEther(rawBalance));
        if (value !== prevBalanceRef.current) {
            prevBalanceRef.current = value;
        setBalance(value);
        }} }, [address]);
    
      useEffect(() => {
        if (address){
        provider.on('block', fetchBalance);
        return () => {
          provider.off('block', fetchBalance);
        };
      }}, [fetchBalance,address]);
    
      return balance;
    
  }