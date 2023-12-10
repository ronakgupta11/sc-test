import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { SessionProvider } from "next-auth/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BaseGoerli,CeloAlfajoresTestnet } from "@thirdweb-dev/chains";

import {
  smartWallet,
  localWallet
} from "@thirdweb-dev/react";
import { WalletContextProvider } from "../context/walletContext";
// import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import Layout from "../components/Layout";
import "../styles/globals.css";
// import { SafeContextProvider } from "@/context/SafeContext";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ; // get one at https://cloud.walletconnect.com/app

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = celoGroups({
  chains,
  projectId,
  appName: (typeof document === "object" && document.title) || "Your App Name",
});

const config = {
  factoryAddress: "0xdA24263fFDB0EE1a5fcDE9076A274d5E9C2cC895",
  gasless: true,
}

const walletConfig = localWallet()
const appInfo = {
  appName: "Celo Composer",
};

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
  autoConnect: true,
});

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider supportedWallets={[smartWallet(walletConfig, config),]} supportedChains= {[BaseGoerli]}clientId="7f2127dd415d652bbc52100bae279f8e">
<WalletContextProvider>

    <AnonAadhaarProvider _appId="164273485720065496641300171009944995763348045824">
     <WagmiConfig config={wagmiConfig}>
      {/* <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}> */}
        <SessionProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      {/* </RainbowKitProvider> */}
    </WagmiConfig>

    </AnonAadhaarProvider>
    </WalletContextProvider>
    </ThirdwebProvider>
    
  );
}

export default App;
