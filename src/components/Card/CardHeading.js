
export default function CardHeading(props){
    return (
        <>
            {
                props.heading &&
                <h2 className="font-sans text-primary-0 bg-primary-2 px-2 rounded-lg font-bold justify-center m-2">
                    {props.heading}
                </h2>
            }
        </>
    )
}