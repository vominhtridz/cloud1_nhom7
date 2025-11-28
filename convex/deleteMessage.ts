import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const deleteMessage = mutation({
  // 1. Dùng v.id để định nghĩa args, giúp đảm bảo type an toàn
  args: { 
    id: v.id("messages") 
  },

  // 2. Hàm handler
  handler: async ({ db }, args) => {
    // SỬA LỖI Ở ĐÂY:
    // Chỉ truyền args.id vào, KHÔNG truyền tên bảng "messages"
    await db.delete(args.id);
    
    // Không cần return { success: true }, nếu không lỗi thì tự động là thành công
  },
});