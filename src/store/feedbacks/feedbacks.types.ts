import { z } from 'zod';
import { AsyncThunkStatus } from '../store.types';

export const userSchema = z.object({
  image: z.string(),
  name: z.string(),
  username: z.string(),
});

export const replySchema = z.object({
  content: z.string(),
  replyingTo: z.string(),
  user: userSchema,
});

export const statusSchema = z.enum(['suggestion', 'planned', 'in-progress', 'live']);

export const categorySchema = z.enum(['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']);

export const commentSchema = z.object({
  id: z.number(),
  content: z.string(),
  user: userSchema,
  replies: z.array(replySchema).optional(),
});

export const FeedbackSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: categorySchema,
  upvotes: z.number(),
  status: statusSchema,
  description: z.string(),
  comments: z.array(commentSchema),
});

export type User = z.infer<typeof userSchema>;
export type Reply = z.infer<typeof replySchema>;
export type Category = z.infer<typeof categorySchema>;
export type Status = z.infer<typeof statusSchema>;
export type Comment = z.infer<typeof commentSchema>;
export type Feedback = z.infer<typeof FeedbackSchema>;

export type FeedbackState = {
  feedbacks?: Feedback[];
  status: AsyncThunkStatus;
  error?: string;
};

