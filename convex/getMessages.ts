import { query } from "./_generated/server";

export const getMessages = query(async ({ db }) => {
  const messages = await db.query("messages").collect();
  // Sort theo createdAt giảm dần (mới nhất trước)
  return messages.sort((a, b) => b.createdAt - a.createdAt);
});
