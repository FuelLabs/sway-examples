
export const NFTImage = ({
  src,
}: {
  src: string;
}) => {
  return (
    <div className="h-0 relative pb-[66.6667%]">
      <img
        src={src}
        className="absolute top-0 h-full w-full object-cover"
      />
    </div>
  );
};
