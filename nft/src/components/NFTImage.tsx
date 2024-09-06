import clsx from "clsx";

export const NFTImage = ({
  src,
  children,
  cover = true,
}: {
  src: string;
  children?: React.ReactNode;
  cover?: boolean;
}) => {
  return (
    <div className="h-0 relative pb-[76.6667%]">
      <img
        src={src}
        className={clsx("absolute top-0 h-full w-full", {
          "object-cover": cover,
          "object-contain": !cover,
        })}
      />
      {children}
    </div>
  );
};
