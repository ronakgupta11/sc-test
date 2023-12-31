import { useSocialConnect } from "@/SocialConnect/useSocialConnect";
import SocialConnectUI from "@/components/SocialConnectUI";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { account, connected, lookupAddress } = useSocialConnect();

  const { data: session } = useSession();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect();
    }
  }, [connect]);

  return (
    <>
      {/* <SocialConnectUI
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      /> */}
      <Disclosure as="nav" className="bg-prosperity border-b border-black">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  {/* <div className="flex flex-shrink-0 items-center">
                    <Image
                      className="block h-8 w-auto sm:block lg:block"
                      src="/logo.svg"
                      width="24"
                      height="24"
                      alt="Celo Logo"
                    />
                  </div> */}
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      Home
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                 
                      <Link className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900" href={'./sendPage'} > Send </Link>
                
                  </div>

                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!hideConnectBtn && (
                    <ConnectWallet
                     
                    />
                  )}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                      <Link className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900" href={'./sendPage'} > Recieve </Link>

                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  
                      <Link className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900" href={'./claimPage'} > Claim </Link>
                    {/* </a> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
               
                      <Link className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900" href={'./donatePage'} > Donate </Link>
                    {/* </a> */}
                  </div>
                {/* {connected && account && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xl text-base px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600"
                    >
                      Social Connect
                    </button>
                  </div>
                )} */}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-4">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="./claimPage"
                  className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                >
                  Claim
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="./sendPage"
                  className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                >
                  Send
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="./recievePage"
                  className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                >
                  Recieve
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="./donatePage"
                  className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
                >
                  Donate
                </Disclosure.Button>
                
                {/* Add here your custom menu elements */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

declare global {
  interface Window {
    ethereum: any;
  }
}
