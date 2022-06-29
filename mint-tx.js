const ethers = require('ethers');
const ABI = require('./abi.json');

const iface = new ethers.utils.Interface(ABI);

// Decoding function data (the value of tx.data)
const txDataEncoded = "0x731133e900000000000000000000000007be9763a718c0539017e2ab6fc42853b4aeeb6b0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000";
const decodedTx = iface.decodeFunctionData("mint", txDataEncoded);
//console.log(decodedTx)


// Encoding structured data (using positional Array)
txData = 
  [
    "0x07Be9763a718C0539017E2Ab6fC42853b4aEeb6B",
    "1",
    "1",
    "0x"
  ]

const encodedTx = iface.encodeFunctionData("mint", txData);
console.log(encodedTx)