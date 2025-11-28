import { mutation } from "./_generated/server";

export const addMessage = mutation({
  handler: async ({ db }, args: { text: string }) => {
    const doc = {
      text: args.text,
      createdAt: Date.now() // lưu số mili giây từ epoch
    };
    return await db.insert("messages", doc);
  },
});
