
export const NFTImage = ({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="h-0 relative pb-[76.6667%]">
      <img
        src={src}
        className="absolute top-0 h-full w-full object-cover"
      />
      {children}
    </div>
  );
};
