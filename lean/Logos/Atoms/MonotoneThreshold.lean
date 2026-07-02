namespace Logos.Atoms

/-- Ein Prädikat ist monoton, wenn Wahrheit nach rechts erhalten bleibt. -/
def MonotonePredicate (P : Nat → Prop) : Prop :=
  ∀ a b, a ≤ b → P a → P b

/-- Eine Grenze ist gültig, wenn der linke Rand nicht größer ist als der rechte Rand. -/
def IsBoundaryValid (leftMax rightMin : Int) : Prop :=
  leftMax ≤ rightMin

end Logos.Atoms
