const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/5 my-4">
            <p className="text-[#F15B42] mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 text-black">{heading}</h3>
        </div>
    );
};

export default SectionTitle;