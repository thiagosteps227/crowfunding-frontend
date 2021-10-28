import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
require("dotenv").config();


const contractInterface = require("../../CrowdfundingABI.json");

const toWei = Web3.utils.toWei;

const metamaskLogin = async () => {
  const provider = await detectEthereumProvider();
  return provider.request({ method: "eth_requestAccounts" });
};

function CreateProjectWeb3UseCase() {
  return {
    create: async (goal, callback) => {
      const provider = await detectEthereumProvider();
      //@ts-ignore
      let web3 = new Web3(provider);
      metamaskLogin();
      

      const contract = new web3.eth.Contract(
        contractInterface.abi,
        "0xa58E8344D4FAee0C1d321e651f7b2557B6eb8356"
      );

      console.log("address "+ process.env.CROWDFUNDING_ADDRESS)

      const accounts = await web3.eth.getAccounts();
    

      metamaskLogin().then(() =>
        contract.methods
          .newCampaign("0xC6494FafEb651d4C1587DA383A445164a971189D", goal)
          .send({ from: "0xC6494FafEb651d4C1587DA383A445164a971189D" })
          .on("transactionHash")
      );
      contract.events
        .CampaignCreated()
        .on("data", (event) => {
          let returnValues = event.returnValues;
          callback(returnValues._projectAddress, returnValues._owner);
        })
        .on("error", console.error);
    },
  };
}

export default CreateProjectWeb3UseCase;
