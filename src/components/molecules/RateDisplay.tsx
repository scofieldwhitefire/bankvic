const RateDisplay = ({
  rate,
  type,
  description,
}: {
  rate: number | string;
  type: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex items-center">
        <span className="text-3xl lg:text-5xl font-bold text-[#1a3b8e]">{rate}</span>
        <div className="flex flex-col ml-3 -space-y-3">
          <span className="text-base lg:text-xl text-[#474747]">%</span>
          <span className="text-base lg:text-xl text-[#474747]">{type}</span>
        </div>
      </div>
      <div className="text-sm lg:text-base font-semibold text-[#474747] mt-1">
        {description}
      </div>
    </div>
  );
};

export default RateDisplay;
