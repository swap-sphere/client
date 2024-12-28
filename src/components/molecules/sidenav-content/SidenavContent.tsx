import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SidenavContent = (props: { title: string, items: {id: number, label: string}[] }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300 border-solid">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        { props.title }
      </h3>
      <ul className="text-sm">
        {
            props.items.map((item) => (
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    { item.label }
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default SidenavContent;
