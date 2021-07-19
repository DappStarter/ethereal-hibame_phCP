require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember artwork give arena flock gas'; 
let testAccounts = [
"0x0c7e6305710064eaad449aa3d9aba0a799f19a55e3ee3af209ab58a18031fa84",
"0xa4988437712c83a42be203627a6d19f0bd3256e11d05102042525318a32f9b00",
"0xefecf83b06a6ab39416fd4d9ec6ee392154e85a5e2013fafb6ff1b34abd4292f",
"0xf855a6f9940b609fead2f30654dcaaa756ee70cfa966ece314c16c8b898602cb",
"0x2533bfdd68a73be3371f72c578a983f4248d9149706f3cba176bfb3ebd6526e2",
"0xa225e7a59e02ccf917b9aaf59e9ca94b9b047d32eeacf15996d14fc5524bc9d3",
"0x6a5ae21378b7f35a8a9e1be1d475315e148e8b0010d42dcfa0201ba6be3a9b9d",
"0xf5cbcc278eb98fe6ba45ae33d52df247d61f6bb35f54db6010e6b1ab8d757717",
"0xc41bb1cd30115930cf808070a31464d39902386cd38f16a73622ea4ed94f921a",
"0x2fdda17e60661d2a457acf16ed80b28dd0149279fedbbce0969779a092205d3e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


