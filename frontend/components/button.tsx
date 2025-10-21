// frontend/components/button.tsx
// Komponen tombol reusable (warna, teks, aksi)

type props = {
  label: string;
  warna ? : "biru" | "hijau" | "abu";
  on_click ? : () => void;
  disabled ? : boolean;
};

export default function button({
  label,
  warna = "biru",
  on_click,
  disabled = false
}: props) {
  const base = "w-full py-3 rounded-xl font-semibold active:scale-95 transition";
  
  const warna_kelas =
    warna === "biru" ?
    "bg-blue-600 text-white" :
    warna === "hijau" ?
    "bg-green-600 text-white" :
    "bg-gray-300 text-gray-600";
  
  return (
    <button
      onClick={on_click}
      disabled={disabled}
      className={`${base} ${warna_kelas} ${disabled ? "opacity-50" : ""}`}
    >
      {label}
    </button>
  );
}