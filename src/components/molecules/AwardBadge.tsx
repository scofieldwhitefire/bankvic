const AwardBadge = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => {
  return (
    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
      <img src={imageSrc} alt={alt} className="w-14 h-14 object-contain" />
    </div>
  );
};

export default AwardBadge;