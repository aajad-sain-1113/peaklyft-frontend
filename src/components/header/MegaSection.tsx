const MegaSection = ({ data }: any) => {
  return (
    <a
      href={data.href}
      className="w-1/3 hover:bg-gray-50 p-3 rounded-lg block"
    >
      <h3 className="font-semibold text-[16px] text-black mb-1">
        {data.title}
      </h3>

      <p className="text-[14px] text-gray-600 leading-5">
        {data.description}
      </p>
    </a>
  );
};

export default MegaSection;
