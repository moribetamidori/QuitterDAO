import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import myEpicNft from '../utils/MyEpicNFT.json';

declare const window: any;
export default function Mint() {
    const [currentAccount, setCurrentAccount] = useState("");
    const [totalSupply, setTotalSupply] = useState(0);
   
    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }
    
        /*
        * Check if we're authorized to access the user's wallet
        */
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        /*
        * User can have multiple authorized accounts, we grab the first one if its there!
        */
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }
      const connectWallet = async () => {
        try {
          const { ethereum } = window;
    
          if (!ethereum) {
            alert("Get MetaMask!");
            return;
          }
    
          /*
          * Fancy method to request access to account.
          */
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    
          /*
          * Boom! This should print out public address once we authorize Metamask.
          */
          console.log("Connected", accounts[0]);
          setCurrentAccount(accounts[0]); 
        } catch (error) {
          console.log(error);
        }
      }
      const askContractToMintNft = async () => {
        const CONTRACT_ADDRESS = "0x2357772f76d21beac3f284353d26b7870633d20d";
      
        try {
          const { ethereum } = window;
      
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);
      
            console.log("Going to pop wallet now to pay gas...")
            let nftTxn = await connectedContract.mint(1, {
              gasLimit: 285000,
              gasPrice: ethers.utils.parseUnits("30", "gwei"),
              value: ethers.utils.parseUnits("5.13", "ether"),
            });
      
            console.log("Mining...please wait.")
            await nftTxn.wait();
            
            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

            // setTotalSupply(await connectedContract.totalSupply())
      
          } else {
            console.log("Ethereum object doesn't exist!");
          }
        } catch (error) {
          console.log(error)
        }
      }
    const renderNotConnectedContainer = () => (
        <button onClick={connectWallet}  className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          Connect to Wallet
        </button>
      );
    
      useEffect(() => {
        checkIfWalletIsConnected();
      }, [])

    return (
      <main>
        <div className="bg-indigo-700">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">The most dangerous of all behaviors may consist of</span>
                <span className="block">doing things &quot;because we&apos;re supposed to&quot;. </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">- Marshall B. Rosenberg</p>
                {currentAccount === "" ? (
                    renderNotConnectedContainer()
                ) : (
                    <button onClick={askContractToMintNft} className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                    Mint NFT
                    </button>
                )}
                {/* <a href="#" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"> Mint Your NFT </a> */}
            </div>
        </div>      

        <div className="bg-white">
  <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
    <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
    </div>

    <div className="mt-2 relative">
      <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
        <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <li className="w-64 inline-flex flex-col text-center lg:w-auto">
            <div className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                <img src="https://s2.loli.net/2022/05/08/iUcCGynWHIq1zjN.png" alt="Black machined steel pen with hexagonal grip and small white logo at top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
              </div>
             
            </div>
        </li>

        <li className="w-64 inline-flex flex-col text-center lg:w-auto">
            <div className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                <img src="https://s2.loli.net/2022/05/08/X2ebPKaBc8d1DLl.png" alt="Black machined steel pen with hexagonal grip and small white logo at top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
              </div>
             
            </div>
        </li>

        <li className="w-64 inline-flex flex-col text-center lg:w-auto">
            <div className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                <img src="https://s2.loli.net/2022/05/08/qHj2lRXwvIyxAfp.png" alt="Black machined steel pen with hexagonal grip and small white logo at top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
              </div>
              
            </div>
        </li>

        <li className="w-64 inline-flex flex-col text-center lg:w-auto">
            <div className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                <img src="https://s2.loli.net/2022/05/08/P9dUmjGgvJewX3D.png" alt="Black machined steel pen with hexagonal grip and small white logo at top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
              </div>
              
            </div>
        </li>
           

        </ul>
      </div>
    </div>

    <div className="mt-12 flex px-4 sm:hidden">
      <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
    </div>
  </div>
</div>
      </main>
    );
  }

