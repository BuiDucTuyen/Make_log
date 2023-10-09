import React, { useEffect } from "react";
import { createConfig, MetaMaskConnector, useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName, WalletConnectConnector, InjectedConnector } from 'wagmi';
import { WagmiConfig } from "wagmi";

export const Connect = () => {
  
    const config = wagmi.createConfig({
        autoConnect: true,
        connectors: [
          new wagmi.MetaMaskConnector(), 
        ],
      });
      const { address, connector, isConnected } = useAccount()
      const { data: ensName } = useEnsName({ address })
      const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
      const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="btn btn-coral-simple !px-[12px] !py-[8px]">
        <div>Address: {ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <WagmiConfig config={config}>
      <div>
        {isConnected ? (
          <div className="btn btn-coral-simple !px-[12px] !py-[8px]">
            <div>Address: {ensName ? `${ensName} (${address})` : address}</div>
            <div>Connected to {connector?.name}</div>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button
            className="border border-current px-3 py-2 rounded-xl"
            onClick={() => connect()}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </WagmiConfig>
  );
};

export default Connect;
