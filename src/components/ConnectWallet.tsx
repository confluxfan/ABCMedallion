import { useState } from "react";
import { Button, Dropdown } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { BrowserProvider } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function ConnectWallet() {
  const [connected, setconnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const onClickConnectButton = async () => {
    console.log("clicked connect button", connected);
    if (!connected) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setconnected(true);
      setWalletAddress(address);
    }
  };

  const items = [
    { key: "dashboard", label: "Dashboard" },
    { key: "merge", label: "Merge" },
  ];

  const connectWalletButton = (
    <Button
      type="primary"
      shape="round"
      icon={connected ? <UnlockOutlined /> : <LockOutlined />}
      onClick={onClickConnectButton}
    >
      {connected ? walletAddress : "Connect Wallet"}
    </Button>
  );

  return (
    <div>
      {connected ? (
        <Dropdown menu={{ items }}>{connectWalletButton}</Dropdown>
      ) : (
        connectWalletButton
      )}
    </div>
  );
}

export default ConnectWallet;
