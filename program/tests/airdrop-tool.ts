import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AirdropTool } from "../target/types/airdrop_tool";

describe("message-sender", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AirdropTool as Program<AirdropTool>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
