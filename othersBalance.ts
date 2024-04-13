import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

let suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  //throw new Error("Provide a public key to check the balance of!");
  const connectionMain = new Connection(clusterApiUrl("mainnet-beta")).tol;
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

// % npx esrun check-balance.ts (some wallet address)
//✅ Finished! The balance for the wallet at address 31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5 is 3!
// all this in othersBalance