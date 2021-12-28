
export default function CardText(props){
    return (
        <>
            {
                props.text &&
                <p className="font-sans text-primary-3 bg-primary-0 rounded-lg p-1 pl-2 mt-2 w-full max-w-xl">
                    {props.text}
                </p>
            }
        </>
    )
}