import ImageContainer from "./ImageContainer";

interface Props {
  icon: ImageMetadata;
  alt: string;
  desc: string;
  detail: string;
}

export default function FeatureCard({ icon, alt, desc, detail }: Props) {
  return <div className="flex flex-col justify-start items-stretch rounded-lg border-2 border-trusty-200 bg-trusty-100 px-7 pt-12 pb-7 my-3 md:mx-3">
    <div className="flex ml-2 mb-6 h-10">
      <ImageContainer src={icon} alt={alt} />
    </div>
    <div className="flex flex-col flex-1 justify-start items-stretch">
      <p className="text-2xl font-bold text-trusty-300 p-2">{desc}</p>
      <p className="text-xl p-2">{detail}</p>
    </div>
  </div>;
}