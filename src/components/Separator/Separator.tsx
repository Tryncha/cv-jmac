import './Separator.css';

const Separator = () => {
  // return (
  //   <div className="Separator">
  //     <div className="Separator-dot" />
  //     <div className="Separator-line" />
  //     <div className="Separator-dottedLine" />
  //     <div className="Separator-dottedLine" />
  //     <div className="Separator-dottedLine" />
  //   </div>
  // );

  return (
    <div className="relative mt-1 flex w-5 flex-col items-center justify-end gap-0.5">
      <div className="absolute top-0 size-3 rounded-full bg-blue-950" />
      <div className="h-full w-0.5 bg-blue-950" />
      <div className="mt-0.5 h-2 w-0.5 bg-blue-950" />
      <div className="mt-0.5 h-2 w-0.5 bg-blue-950" />
      <div className="mt-0.5 h-2 w-0.5 bg-blue-950" />
    </div>
  );
};

export default Separator;
