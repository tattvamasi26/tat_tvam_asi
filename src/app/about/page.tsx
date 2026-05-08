export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", paddingTop:100 }}>
      <div style={{ maxWidth:720, margin:"0 auto", padding:"80px 2rem" }}>
        <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1.2rem" }}>About</p>
        <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"var(--text0)", marginBottom:"2rem", lineHeight:1.1 }}>What This Place Is</h1>
        <div style={{ width:40, height:1, background:"var(--gold-dim)", marginBottom:"3rem" }}/>
        {[
          ["This is not a website about Advaita Vedanta.", "It is an attempt to create a space where Advaita Vedanta can speak for itself. The distinction matters. A website about something keeps the subject at arm's length. A space for something invites direct encounter."],
          ["The platform is called Tat Tvam Asi.", "Thou Art That. The teaching Uddalaka gave his son Shvetaketu in the forest of the Chandogya Upanishad — nine times, through nine analogies, until the recognition arose on its own. This site aspires to the same patience."],
          ["Content grows like a tree, not a newspaper.", "New material is added slowly, deliberately, and only when it comes from understanding rather than information. The goal is not comprehensiveness. It is depth. One verse understood fully is worth more than a thousand listed."],
          ["Everything here points in one direction.", "Inward. Not as an instruction to introspect, but as the natural movement of all genuine inquiry. The verses, the temples, the teachers, the concepts — they are fingers pointing at the same moon. This platform tries never to mistake itself for the moon."],
        ].map(([heading, body]) => (
          <div key={heading} style={{ marginBottom:"3rem" }}>
            <h3 style={{ fontFamily:"var(--serif)", fontSize:"1.3rem", fontWeight:300, color:"var(--gold)", marginBottom:"0.8rem" }}>{heading}</h3>
            <p style={{ fontFamily:"var(--sans)", fontSize:"0.92rem", color:"var(--text1)", lineHeight:2, fontWeight:300 }}>{body}</p>
          </div>
        ))}
        <div style={{ marginTop:"4rem", background:"var(--bg1)", border:"1px solid rgba(200,150,62,0.1)", padding:"2.5rem" }}>
          <p style={{ fontFamily:"var(--serif)", fontSize:"1.2rem", fontStyle:"italic", color:"var(--text0)", lineHeight:1.7, opacity:0.85 }}>
            "When they leave — one thing stays. Not information. A question.<br/>
            <em>Who is the one who was reading just now?</em><br/>
            That question is the teaching. Everything else is pointing at it."
          </p>
        </div>
      </div>
    </div>
  );
}
