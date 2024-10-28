
export default function SupportStep({ subject, predicate } : { subject: string, predicate: string }) {
  return <div className="flex flex-row mt-2 mb-5 sm:mb-7 items-baseline">
    <div className={`flex flex-row items-center justify-center rounded-full aspect-square w-12 h-12 mr-2 ${subject.toLocaleLowerCase() === 'you' ? 'bg-trusty-400' : 'bg-serenity'}`}>
      <span className={`font-black ${subject.toLocaleLowerCase() === 'you' ? 'text-serenity' : 'text-trusty-400'}`}>{subject}</span>
    </div>
    <span className="text-xl">{predicate}</span>
  </div>;
}
