export default function FootballerMindsetSystem() {
  const checklist = [
    "Prayed consistently",
    "Hit calorie target",
    "No unnecessary snacking",
    "Gym completed",
    "Football training completed",
    "Read for 10+ minutes",
    "Journaled",
    "Mindfulness completed",
    "Stayed disciplined with phone usage",
    "Good sleep and recovery",
  ];

  const affirmations = [
    "I am becoming a disciplined footballer.",
    "I stay calm and composed under pressure.",
    "I train consistently even when motivation is low.",
    "My confidence is built through discipline and action.",
  ];

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20, fontFamily: "Arial" }}>
      <h1>Footballer System</h1>
      <p>Build discipline, consistency, and mental strength daily.</p>

      <h2>Daily Checklist</h2>
      {checklist.map((item, i) => (
        <div key={i} style={{ background: "#222", padding: 10, margin: 5, borderRadius: 8 }}>
          {item}
        </div>
      ))}

      <h2>Affirmations</h2>
      {affirmations.map((item, i) => (
        <div key={i} style={{ background: "#333", padding: 10, margin: 5, borderRadius: 8 }}>
          {item}
        </div>
      ))}
    </div>
  );
}
