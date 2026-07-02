import type { Atom } from "@logos-table/domain";
import { familyCssVars } from "../ui/familyStyles";

type AtomRoleCardProps = {
  atom: Atom;
  role: string;
  onSelectAtom?: (atomId: string) => void;
};

export function AtomRoleCard({ atom, role, onSelectAtom }: AtomRoleCardProps) {
  const InteractiveWrapper = onSelectAtom ? "button" : "div";
  const props = onSelectAtom ? { type: "button", onClick: () => onSelectAtom(atom.id) } : {};

  return (
    <InteractiveWrapper
      {...(props as any)}
      className="atom-role-card"
      style={familyCssVars(atom.family)}
    >
      <div className="atom-role-card__header">
        <div className="atom-role-card__symbol">
          {atom.symbol}
        </div>
        <div className="atom-role-card__name">
          {atom.name}
        </div>
        <div className="atom-role-card__family">
          {atom.family}
        </div>
      </div>
      <div className="atom-role-card__role">
        {role}
      </div>
    </InteractiveWrapper>
  );
}
