import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const deleteMessage = mutation({
  // 1. Dùng v.id("messages") để Convex tự động kiểm tra ID hợp lệ
  args: { 
    id: v.id("messages") 
  },

  // 2. Trong handler, chỉ truyền args.id vào db.delete
  handler: async ({ db }, args) => {
    await db.delete(args.id); // ĐÚNG: Chỉ có 1 tham số
    return { success: true };
  },
});