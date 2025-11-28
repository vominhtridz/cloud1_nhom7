import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const deleteMessage = mutation({
  // 1. Dùng v.id("messages") để đảm bảo ID truyền vào là đúng chuẩn
  args: { 
    id: v.id("messages") 
  },

  // 2. Hàm xử lý chính
  handler: async ({ db }, args) => {
    // SỬA LỖI Ở ĐÂY: Chỉ truyền 1 tham số là args.id
    // Không được viết là db.delete("messages", args.id)
    await db.delete(args.id);
    
    return { success: true };
  },
});