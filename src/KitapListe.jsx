// KitapListe.jsx
import KitapKarti from "./KitapKarti";

export default function KitapListe({ kitaplar, favoriler, toggleFavori }) {
  if (kitaplar.length === 0) {
    return <p>Hiç kitap bulunamadı.</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          favorideMi={favoriler.includes(kitap.id)}
          toggleFavori={toggleFavori}
        />
      ))}
    </div>
  );
}
