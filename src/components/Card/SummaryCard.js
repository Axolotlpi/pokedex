
function SummaryCard({img, heading, text}) {

    return (
    <div className="max-w-max max-h-max m-4 p-2 space-x-2 flex bg-primary-1 rounded-md shadow-lg">
        {
            img &&
            <img src={img}
                className="w-20 rounded-xl" />
        }
        <div className="flex flex-col">
            <h3 className="font-san text-primary-3 font-bold"
            >{heading}</h3>
            <p className="font-sans text-primary-3"
            >{text}</p> 
        </div>
    </div>
    );
  }
  
export default SummaryCard;
  