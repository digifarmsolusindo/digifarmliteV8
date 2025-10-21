// frontend/components/adminstatcard.tsx
// Komponen card statistik (digunakan di dashboard admin)

type props = {
  label: string;
  value: string;
};

export default function adminstatcard({ label, value }: props) {
  return (
    <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-bold text-blue-800">{value}</p>
    </div>
  );
}