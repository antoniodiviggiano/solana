import { Keypair } from "@solana/web3.js";

export const key = Keypair.generate().publicKey.toBase58();