const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://Sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = '0x6B2bF09B03f4378817d1dd559A8B1E72ec6cE3a9' // Your account address 1
const account2 = '0xE887312c0595a10aC88e32ebb8e9F660Ad9aB7F7' // Your account address 2

const privateKey1 = 'dda39d34d7ffd7c7f6455a1e7f27549e26de451e2864b1875cfea9c0bd7c8b69' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()