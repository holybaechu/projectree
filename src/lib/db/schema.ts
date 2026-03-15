import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: integer("id").primaryKey({ autoIncrement: true }), // 프로젝트 ID
    name: text("name").notNull(), // 프로젝트 이름
    description: text("description"), // 프로젝트 설명
    imageUrl: text("image_url"), // 프로젝트 이미지 URL
    createdAt: text("created_at").notNull(), // 생성일
    deadline: text("deadline"), // 마감일
});