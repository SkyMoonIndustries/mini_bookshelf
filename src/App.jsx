import { useState, useEffect } from "react";
import AramaCubugu from "./AramaCubugu";
import KategoriFiltre from "./KategoriFiltre";
import KitapListe from "./KitapListe";
import FavoriPaneli from "./FavoriPaneli";

export default function App() {
  const kitaplar = [
    { id: 1, baslik: "1984", yazar: "George Orwell", kategori: "Roman" },
    { id: 2, baslik: "Hayvan Çiftliği", yazar: "George Orwell", kategori: "Roman" },
    { id: 3, baslik: "Sapiens", yazar: "Yuval Noah Harari", kategori: "Tarih" },
    { id: 4, baslik: "Atomik Alışkanlıklar", yazar: "James Clear", kategori: "Kişisel Gelişim" },
    { id: 5, baslik: "Simyacı", yazar: "Paulo Coelho", kategori: "Roman" },
  ];

  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("aramaMetni") || "");
  const [kategori, setKategori] = useState("");

  const [favoriler, setFavoriler] = useState(() => {
    const kayitli = localStorage.getItem("favoriler");
    return kayitli ? JSON.parse(kayitli) : [];
  });

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const aramaUygun = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = kategori === "" || kitap.kategori === kategori;
    return aramaUygun && kategoriUygun;
  });

  const toggleFavori = (kitapId) => {
    setFavoriler((prev) =>
      prev.includes(kitapId)
        ? prev.filter((id) => id !== kitapId)
        : [...prev, kitapId]
    );
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ flex: 1, marginTop: "-300px" }}>
        <h1>📚 Mini Kitaplık</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "30px", marginBottom: "10px" }}>
          <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
          <KategoriFiltre kategori={kategori} setKategori={setKategori} />
        </div>


        <KitapListe
          kitaplar={filtrelenmisKitaplar}
          favoriler={favoriler}
          toggleFavori={toggleFavori}
        />
      </div>    
        <FavoriPaneli kitaplar={kitaplar} favoriler={favoriler} toggleFavori={toggleFavori} />
    </div>
  );
}
