import { z } from "zod";

const IdSchema = z
  .string()
  .regex(/^[a-z][a-z0-9-]*$/, "ID must be kebab-case, e.g. monotone-threshold");

const NonEmptyString = z.string().trim().min(1);

export const AtomFamilySchema = z.enum([
  "Ordnung",
  "Relation",
  "Identität",
  "Bewegung",
  "Zeit",
  "Wissen",
  "Möglichkeit",
  "Entscheidung",
  "Struktur",
  "Beweis",
  "Lokalität"
]);

export const AtomSchema = z.object({
  id: IdSchema,
  symbol: z.string().trim().min(1).max(3),
  name: NonEmptyString,
  family: AtomFamilySchema,
  core_sentence: NonEmptyString,
  description: NonEmptyString,
  formal_shape: NonEmptyString,
  algorithmic_patterns: z.array(NonEmptyString).min(1),
  requirements: z.array(NonEmptyString).min(1),
  python_template: NonEmptyString,
  lean_sketch: NonEmptyString,
  related_atoms: z.array(IdSchema),
  tags: z.array(NonEmptyString).default([])
}).strict();

export const ProblemSchema = z.object({
  id: IdSchema,
  title: NonEmptyString,
  surface: NonEmptyString,
  deep_structure: NonEmptyString,
  atoms: z.array(IdSchema).min(1),
  proof_sketch: NonEmptyString,
  python_solution: NonEmptyString,
  lean_sketch: NonEmptyString,
  reflection_questions: z.array(NonEmptyString),
  source: z.enum(["leetcode", "custom", "book", "other"]).optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).optional()
}).strict();

export const UserNoteSchema = z.object({
  target_type: z.enum(["atom", "problem"]),
  target_id: IdSchema,
  content: NonEmptyString,
  updated_at: z.string().datetime()
}).strict();
