export default function Button({ children, onClick, type = "button", loading, disabled }) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="disabled:opacity-50 mt-6 w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition-transform cursor-pointer bg-[#75B06F]"
    >
      
      {loading ? (children === "Save Note" ? "Saving Note" : "Updating Note" ) :children}
    </button>

  );
}
