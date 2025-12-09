const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/5 my-6">
      <p className="text-white/80 mb-2 text-xs md:text-sm tracking-wider uppercase">
        ✦ {subHeading} ✦
      </p>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
        {heading}
      </h3>
      <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
