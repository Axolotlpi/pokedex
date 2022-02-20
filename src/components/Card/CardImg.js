export default function CardImg({ img, alt }) {
  return (
    <>
      {img && <img src={img} alt={alt} className="w-full h-full rounded-xl" />}
    </>
  );
}
