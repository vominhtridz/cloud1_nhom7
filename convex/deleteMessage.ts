import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const deleteMessage = mutation({
  // 1. Định nghĩa tham số đầu vào bằng validator
  args: { 
    id: v.id("messages") 
  },
  
  // 2. Hàm xử lý
  handler: async (ctx, args) => {
    // Lúc này args.id đã được đảm bảo đúng kiểu, không cần ép kiểu
    await ctx.db.delete(args.id);
    return { success: true };
  },
});