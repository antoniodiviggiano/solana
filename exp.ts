import { Connection, Keypair, PublicKey, clusterApiUrl ,LAMPORTS_PER_SOL} from "@solana/web3.js";
//const keypair = Keypair.generate();
const keypairSolIntro = `CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN`;
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey(keypairSolIntro);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)