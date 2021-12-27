
export default function CardImg(props){
    return (
        <>
            {
                props.img &&
                <img src={props.img}
                    className="w-full h-full rounded-xl" />
            }
        </>
    )
}