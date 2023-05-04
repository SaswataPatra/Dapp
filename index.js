const { ethers } = require("ethers");

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "newPetName",
        type: "string",
      },
      {
        internalType: "string",
        name: "newPetOwner",
        type: "string",
      },
      {
        internalType: "string",
        name: "newPetAge",
        type: "string",
      },
    ],
    name: "setPet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petAge",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petOwner",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function main() {
  const network = "sepolia";
  const provider = new ethers.providers.InfuraProvider(
    network,
    "fd7ea79bdf4b44e48c15c9a03d805ab9"
  );
  const signer = new ethers.Wallet(
    "0d34d264d2ea7e022dd236964525ea8e39e9b6030f81bc323f47259200e4075a", provider);

  const USDTContract = new ethers.Contract(
    "0x0fa11a8eae0bd9dd2b985740141a9e5f6601e2ee",
    abi,
    signer
  );

  // const tx = await USDTContract.setPet("Bobby", "John", "10");
  // const receipt = await tx.wait();
  // console.log("receipt: ", receipt);
  const petName = await USDTContract.getPet();
  console.log("petName: ", petName);
}

main();
