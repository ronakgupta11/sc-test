import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { SessionProvider } from "next-auth/react";
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
    <AnonAadhaarProvider _appId="164273485720065496641300171009944995763348045824">
     <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
        <SessionProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
    </AnonAadhaarProvider>
    
  );
}

export default App;
