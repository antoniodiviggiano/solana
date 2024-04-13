import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

let suppliedPublicKey = process.argv[2];

console.log("Supplied public key:", suppliedPublicKey); // Debugging log

if (!suppliedPublicKey || suppliedPublicKey.trim() === "") {
  const tolySolana = "toly.sol"
  const connectionMain = new Connection("https://api.mainnet-beta.solana.com", "confirmed")
  const publicKeyMain = new PublicKey(tolySolana);
  const balanceInLamports = await connectionMain.getBalance(publicKeyMain);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  console.log(
    `✅ Finished! The balance for the wallet ${tolySolana} at address ${publicKeyMain} is ${balanceInSOL}!`
  );

} else {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const publicKey = new PublicKey(suppliedPublicKey);
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
}


// % npx esrun check-balance.ts (some wallet address)
//✅ Finished! The balance for the wallet at address 31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5 is 3!
// all this in othersBalance