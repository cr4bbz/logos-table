import Lake
open Lake DSL

package «Logos» where
  -- Lean package for philosophical-logical atoms.

@[default_target]
lean_lib «Logos» where
  roots := #[`Logos]
