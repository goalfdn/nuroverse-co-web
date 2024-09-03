
export default function PercentVisualizer({ value } : { value: number }) {
  return <div className="flex flex-col pr-2 pb-1">
    {
      [...Array(10).keys()].map((i) => (
        <div className="flex flex-row">
          {
            [...Array(10).keys()].map((j) => <SinglePercent on={(101 - 10 * i - (10 - j)) <= Math.ceil(value)} />)
          }
        </div>
      ))
    }
  </div>;
}

function SinglePercent({ on }: { on: boolean }) {
  return <div className={"m-[1px] h-[4px] w-[4px] rounded-sm " + (!!on ? "bg-trusty-300" : "bg-teal-50 opacity-10")} />;
}
