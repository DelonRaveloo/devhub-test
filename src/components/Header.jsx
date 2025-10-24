export default function Header({title}) {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    </header>
  );
}
