import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";


const metamaskLogin = async () => {
  const provider = await detectEthereumProvider();
  return provider.request({ method: "eth_requestAccounts" });
};

export default function FundingProjectWeb3UseCase() {

  return {
    
    fund: async (contractAddress, value, callback) => {
      
      const provider = await detectEthereumProvider();
      let web3 = new Web3(provider);
      //const accounts = await web3.eth.getAccounts();
      metamaskLogin();
     
      /**const contractController = new web3.eth.Contract(
        contractInterface.abi,
        ProjectController.address
      );*/

      /**let transaction = { from: accounts[0], value: toWei(value) };

      metamaskLogin().then(() => contractController.methods
        .fund(contractAddress)
        .send(transaction)
        .then(() => callback(accounts[0], value))
        .catch((error) => console.log("Error in (fund) => " + error)));*/
    }
  }
}
