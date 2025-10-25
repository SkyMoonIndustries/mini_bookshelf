// AramaCubugu.jsx
export default function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Kitap ara..."
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "400px",
        }}
      />
    </div>
  );
}
