import ImageContainer from "./ImageContainer";
import PercentVisualizer from "./PercentVisualizer";
import linkIcon from "../images/link.svg";

interface Props {
  value: number;
  desc: string;
  source: string;
  url: string;
}

export default function StatCard({ value, desc, source, url }: Props) {
  return <a href={url} target="_blank" className="flex flex-col justify-start items-center rounded-lg border-[1px] border-opacity-5 border-teal-50 px-7 pt-12 pb-7 my-3 md:mx-3 hover:bg-teal-50 hover:bg-opacity-5 hover:cursor-pointer">
    <div className="flex flex-row items-center">
      <PercentVisualizer value={value} />
      <p className="text-6xl text-trusty-300 p-1">{`${value}%`}</p>
    </div>
    <div className="flex flex-1 flex-col justify-between items-end">
      <p className="flex flex-row text-2xl text-center text-trusty-200 p-2">
        {desc}
      </p>
      <div className="flex flex-row mt-6 justify-between items-center self-stretch">
        <p className="flex flex-1 font-black text-trusty-300">{source}</p>
        <div className="w-6">
          <ImageContainer src={linkIcon} alt="URL Source link icon" />
        </div>
      </div>
    </div>
  </a>;
}
