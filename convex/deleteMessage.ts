import { mutation } from "./_generated/server";

// Định nghĩa mutation deleteMessage
export const deleteMessage = mutation(async ({ db }, args: { id: string }) => {
  await db.delete("messages", args.id);
  return { success: true };
});
