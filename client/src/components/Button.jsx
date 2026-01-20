export default function Button({ children, onClick, type = "button", loading }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="disabled:opacity-50 mt-6 w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition-transform cursor-pointer bg-[#75B06F]"
    >
      {loading ? "Saving note" : children}
    </button>

  );
}
