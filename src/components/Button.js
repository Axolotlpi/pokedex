export default function Button({ text, click }) {
  return (
    <button
      className=" text-semibold min-w-max w-full h-max p-2 rounded-full active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.32)] bg-secondary-1 text-primary-0 transition-all duration-75"
      onClick={click}
    >
      {text}
    </button>
  );
}
