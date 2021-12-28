
export default function Heading({heading}){
    
    return (
        <h1 className="text-xl font-semibold w-max p-1 text-primary-0 bg-primary-2 shadow-sm rounded-sm col-span-12 place-self-center m-4">
            {heading}
        </h1>
    );
}