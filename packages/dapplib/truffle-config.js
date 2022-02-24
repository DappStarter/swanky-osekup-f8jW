require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name response snow pulp install light army gather'; 
let testAccounts = [
"0x8f8b9d6a7b21ae2ecf5feae341b1b2e049e5aa8b18783ba9701ad574540fc70b",
"0x248e6eb17c3bfcf84347bb03ab58aaa93adfb0d71456ae0ddfd3fc16a6c73a3d",
"0x58f8c9b281ceff08454dd38acbfa5afe7d3421e5aad4c635a1f776adb7f9aaf5",
"0xb914f077e113bb5e0db69f6f63880b671a8baa6b7e08f03ad45b6cfa11a24c4e",
"0x88094bbb61e91c0230362d09b43c9d2a60796f8c59a382d6a9ea2c651043e0c4",
"0x793c032ace8e2bc75a9bc13849d38ee5fb3daaf66a951ff3ccfe2b2365e2ecb4",
"0x91f8a03418839527dc419bd967bf6e4f9dc546c0ddb514949b9c82b2d62f9cfd",
"0x5a83ffa2d4d1178655c1479a2a91140a1aeca147e58d79e00267854f454310c4",
"0xbd14aa891c2ec4da6dfa2ef1acfb54e6216ea16e410db19e492a6a3e7a5afce2",
"0x831ab6f24f0b97bc18b2d4872b1fab330e1196d29d874ec0220392119eb17327"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

