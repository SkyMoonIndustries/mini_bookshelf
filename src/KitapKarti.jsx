// KitapKarti.jsx
export default function KitapKarti({ id, baslik, yazar, kategori, favorideMi, toggleFavori }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "180px",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 5px 0" }}>{baslik}</h3>
      <p style={{ margin: "4px 0" }}>✍️ {yazar}</p>
      <p style={{ margin: "4px 0", fontStyle: "italic", color: "#555" }}>{kategori}</p>

      <button
        onClick={() => toggleFavori(id)}
        style={{
          backgroundColor: favorideMi ? "#9c37c7ff" : "#0a07cfff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "6px",
        }}
      >
        {favorideMi ? "Favoriden Çıkar" : "Favoriye Ekle"}
      </button>
    </div>
  );
}
