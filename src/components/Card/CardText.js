
export default function CardText(props){
    return (
        <>
            {
                props.text &&
                <p className="font-sans text-primary-3 bg-primary-0 rounded-lg p-1 mt-2 w-11/12">
                    {props.text}
                </p>
            }
        </>
    )
}