/**
 * Nyāya's five-membered argument, with the worked example beside it.
 *
 * Two columns: what each member does, and what it says in the standard
 * smoke-and-fire example. Seeing the abstract step and the concrete
 * line together is the whole value — the five members read as empty
 * formalism without the example, and the example reads as a party
 * trick without the steps.
 *
 * A numbered spine runs down the left, the way the saṃskāra arc and
 * the pralaya list are built. One column on a phone, with the example
 * tucked under its step.
 */
export function AvayavaChain({
  avayavas,
  scriptClass,
  strings,
}: {
  avayavas: { id: string; name: string; sanskrit: string; step: string; example: string }[];
  scriptClass: string;
  strings: { step: string; example: string };
}) {
  return (
    <ol className="da-avayavas">
      {avayavas.map((a, i) => (
        <li key={a.id} className="da-avayava">
          <span className="da-avayava-n" aria-hidden="true">
            {(i + 1).toLocaleString("en-IN")}
          </span>

          <div className="da-avayava-body">
            <p className="da-avayava-head">
              <span className="da-avayava-name">{a.name}</span>
              <span className={`da-avayava-sanskrit ${scriptClass}`}>{a.sanskrit}</span>
            </p>

            <div className="da-avayava-cols">
              <p className="da-avayava-step">
                <span className="fact-label">{strings.step}</span>
                {a.step}
              </p>
              <p className="da-avayava-example">
                <span className="fact-label">{strings.example}</span>
                {a.example}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
