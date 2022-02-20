export default function CardShell(props) {
  return (
    <div className="bg-primary-1 rounded-3xl min-w-max h-full flex flex-col justify-center items-center px-2 py-4">
      {props.children}
    </div>
  );
}
