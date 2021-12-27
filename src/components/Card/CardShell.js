
export default function CardShell(props){
    return (
        <div className="bg-primary-1 rounded-3xl min-w-min h-full flex flex-col justify-center items-center p-2">
            {props.children}
        </div>
    );
}