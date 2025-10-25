// FavoriPaneli.jsx
export default function FavoriPaneli({ kitaplar, favoriler, toggleFavori }) {
  const favoriKitaplar = kitaplar.filter((k) => favoriler.includes(k.id));

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        right: "5%",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        padding: "10px",
        maxHeight: "70vh",
        overflowY: "auto",
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#146eebff",
        height: "fit-content",
      }}
    >
      <h3>❤️ Favoriler ({favoriKitaplar.length})</h3>
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori yok.</p>
      ) : (
        <ul style={{ paddingLeft: "16px" }}>
          {favoriKitaplar.map((kitap) => (
            <li key={kitap.id}>
              {kitap.baslik}{" "}
              <button
                onClick={() => toggleFavori(kitap.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "red",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
