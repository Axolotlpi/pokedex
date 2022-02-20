import CardShell from '../components/Card/CardShell';
import CardHeading from '../components/Card/CardHeading';
import CardImg from '../components/Card/CardImg';
import CardText from '../components/Card/CardText';

export default function PokeCard({ name, img, descriptions }) {
  return (
    <div className="h-min">
      <CardShell>
        <div className="w-6/12">
          <CardImg img={img} alt={name} />
        </div>
        <CardHeading heading={name} />
        {descriptions &&
          Array.isArray(descriptions) &&
          descriptions.map((stat) => (
            <CardText text={`${stat.stat.name}: ${stat.base_stat}`} />
          ))}
      </CardShell>
    </div>
  );
}
