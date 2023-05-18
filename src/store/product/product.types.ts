import { z } from 'zod';

export const commentSchema = z.object({
  id: z.number(),
  content: z.string(),
  user: z.object({
    image: z.string(),
    name: z.string(),
    username: z.string(),
  }),
});

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  upvotes: z.number(),
  status: z.string(),
  description: z.string(),
  comments: z.array(commentSchema),
});

export type Comment = z.infer<typeof commentSchema>;
export type Product = z.infer<typeof ProductSchema>;

