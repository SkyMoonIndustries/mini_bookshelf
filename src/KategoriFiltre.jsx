// KategoriFiltre.jsx
export default function KategoriFiltre({ kategori, setKategori }) {
  return (
    <div style={{ marginTop: "0px" }}>
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        style={{ padding: "8px", fontSize: "12px" }}
      >
        <option value="">Tüm Kategoriler</option>
        <option value="Roman">Roman</option>
        <option value="Tarih">Tarih</option>
        <option value="Kişisel Gelişim">Kişisel Gelişim</option>
      </select>
    </div>
  );
}
