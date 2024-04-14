import * as web3 from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment, airdropIfRequired } from "@solana-developers/helpers";

const PING_PROGRAM_ADDRESS = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa')
const PING_PROGRAM_DATA_ADDRESS =  new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod')
const CLUSTER_NAME = 'devnet'

//dobbiamo fare una transazione da noi payer a reciver , abbiamo un address corrispondente 
// al program , e trasferire Sol ad un altro Address Devnet 
const payer = getKeypairFromEnvironment('SECRET_KEY')
const connection = new web3.Connection(web3.clusterApiUrl(CLUSTER_NAME));
console.log(`⚡️ Connected to Solana ${CLUSTER_NAME} cluster!`);

console.log(`🔑 Loaded keypair ${payer.publicKey.toBase58()}!`);

const transaction = new web3.Transaction();

await connection.requestAirdrop(payer.publicKey, web3.LAMPORTS_PER_SOL * 1);


const programId = new web3.PublicKey(PING_PROGRAM_ADDRESS)
const pingProgramDataId = new web3.PublicKey(PING_PROGRAM_DATA_ADDRESS)

const instruction = new web3.TransactionInstruction({
  keys: [
    {
      pubkey: pingProgramDataId,
      isSigner: false,
      isWritable: true
    },
  ],
  programId
})


transaction.add(instruction)

const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer]
)

console.log(`✅ Transaction completed! Signature is ${signature}`)

