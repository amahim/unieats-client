const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/5 my-8">
      {subHeading && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full uppercase">
          {subHeading}
        </span>
      )}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
        {heading}
      </h3>
      <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
