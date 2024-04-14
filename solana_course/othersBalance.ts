import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
const addressTolySol = "GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW";

try {
  const publicKey = new PublicKey(addressTolySol);
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  if (balanceInLamports === 0) {
    console.log(`❌ L'address ${publicKey} non ha SOL, potrebbe non essere in uso.`);
  } else {
    console.log(`✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`);
  }
} catch (error) {
  console.log(`❌ Errore: ${error.message}`);
}
