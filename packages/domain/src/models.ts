import { z } from "zod";
import { AtomSchema, ProblemSchema, UserNoteSchema } from "./schemas.js";

export type Atom = z.infer<typeof AtomSchema>;
export type Problem = z.infer<typeof ProblemSchema>;
export type UserNote = z.infer<typeof UserNoteSchema>;
