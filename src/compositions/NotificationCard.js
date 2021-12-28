import SummaryCard from '../components/Card/SummaryCard';

export default function NotifiactionCard({message}){
    return (
        <>
            {
                message && <div className="fixed bottom-0 right-0">
                <SummaryCard heading={message}/>
                </div>
            }
        </>
    );
}