import Button from "../atoms/Button";

export const Sections = ({
  image,
  topText,
  title,
  children,
  btnText,
  pattern,
}: {
  image: string;
  topText: string;
  title: string;
  children: React.ReactNode;
  btnText: string;
  pattern?: string;
}) => {
  return (
    <>
      <section className="w-full bg-[#f5f5f5] pb-20">
        <div className="container mx-auto px-5 lg:px-20">
          <div
            className={`flex ${
              pattern === "reverse"
                ? "flex-col lg:flex-row-reverse"
                : "flex-col lg:flex-row"
            } items-center justify-center gap-16`}
          >
            <img
              src={image}
              alt={title}
              className="object-cover size-[300px]size-[400px]"
            />
            <div className="pl-5 flex flex-col gap-5 items-start">
              <span className="text-[#474747] text-base font-light">
                {topText}
              </span>
              <div className="relative">
                <span className="text-[#ff7a59] absolute top-0 -left-4 lg:-left-7 text-3xl lg:text-5xl font-extrabold">
                  /
                </span>
                <span className="text-3xl lg:text-5xl font-bold text-[#1a3b8e]">
                  {title}
                </span>
              </div>
              {children}
              <Button variant="primary">{btnText}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
