const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'
const address = '0x6B2bF09B03f4378817d1dd559A8B1E72ec6cE3a9'

const main = async () => {
    const balance = await provider.getBalance(address)
    // console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    console.log(`\nETH Balance of ${address} --> ${balance} ETH\n`)
}

main()