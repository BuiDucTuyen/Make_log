import { useEffect, useState } from "react";

const Connect = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [isDisconnectConfirmed, setIsDisconnectConfirmed] = useState(false);
  
    useEffect(() => {
      getCurrentWalletConnected();
      addWalletListener();
    }, [walletAddress]);
  
    const connectWallet = async () => {
      if (!isConnected) { 
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          try {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setWalletAddress(accounts[0]);
            setIsConnected(true);
            setIsDisconnectConfirmed(false); 
            console.log(accounts[0]);
          } catch (err) {
            setWalletAddress("");
            setIsConnected(false);
            console.error(err.message);
          }
        } else {
          console.log("Please install MetaMask");
        }
      }
    };
  
    const disconnectWallet = async () => {
      if (isConnected) {
        if (window.confirm("Bạn có chắc chắn muốn ngắt kết nối ví?")) {
          if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
              const isConnected = await window.ethereum.send("eth_accounts");
    
              if (isConnected.result && isConnected.result.length > 0) {
                const provider = window.ethereum;
                await provider.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                const accounts = await provider.request({
                  method: "eth_accounts",
                });
    
                if (accounts.result.length === 0) {
                  setWalletAddress("");
                  setIsConnected(false);
                  setIsDisconnectConfirmed(false); 
                  console.log("Wallet disconnected.");
                } else {
                  console.log("Disconnect request was not accepted by the user.");
                }
              } else {
                console.log("No connected accounts found.");
              }
            } catch (err) {
              console.error("Error disconnecting wallet:", err);
            }
          } else {
            console.log("Please install MetaMask");
          }
        } else {
          setIsDisconnectConfirmed(false); 
        }
      }
    };
  

  const addBscTestnetToWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const bscTestnetNetwork = {
          chainId: "0x61",
          chainName: "Binance Smart Chain Testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
          nativeCurrency: {
            name: "BNB",
            symbol: "bnb",
            decimals: 18,
          },
        };

        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [bscTestnetNetwork],
        });

        alert("BSC Testnet added to wallet.");
      } catch (error) {
        console.error("Error adding BSC Testnet to wallet:", error);
      }
    } else {
      console.log("MetaMask or wallet provider not found.");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true); 
          console.log(accounts[0]);
        } else {
          setIsConnected(false); 
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        setIsConnected(false); // Ví chưa kết nối
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const addCustomNetwork = async (network) => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [network],
        });
        console.log("New network added to MetaMask.");
      } catch (error) {
        console.error("Error adding network to MetaMask:", error);
      }
    } else {
      console.log("MetaMask or wallet provider not found.");
    }
  };

  const addWalletListener = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
          console.log(accounts[0]);
        } else {
          setWalletAddress("");
          setIsConnected(false);
          console.log("Wallet disconnected.");
        }
      });
    } else {
      setWalletAddress("");
      setIsConnected(false);
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className="relative z-10 items-center space-x-[20px] hidden md:flex">
      {isConnected ? (
        <>
          <button
            className="border border-current px-3 py-2 rounded-xl"
            onClick={disconnectWallet}
          >
            Disconnect Wallet
          </button>
          <a
            className="mx-auto flex items-center justify-center px-3 py-2 border border-current rounded-xl"
            href="/blog"
            onClick={addBscTestnetToWallet}
          >
            BSC Testnet
          </a>
        </>
      ) : (
        <button
          className="border border-current px-3 py-2 rounded-xl"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect;
