import type { Atom } from "@logos-table/domain";
import { familyCssVars } from "../ui/familyStyles";

type AtomHeroProps = {
  atom: Atom;
};

export function AtomHero({ atom }: AtomHeroProps) {
  return (
    <div className="atom-hero" style={familyCssVars(atom.family)}>
      <div className="atom-hero__layout">
        <div className="atom-hero__symbol">
          {atom.symbol}
        </div>
        <div>
          <div className="hero-kicker">
            {atom.family}
          </div>
          <h2 className="hero-title">
            {atom.name}
          </h2>
        </div>
      </div>
      
      <p className="hero-quote">
        „{atom.core_sentence}“
      </p>
    </div>
  );
}
