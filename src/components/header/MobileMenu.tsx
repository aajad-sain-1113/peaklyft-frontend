import { headerMenu } from "@/utils/utils";

const MobileMenu = ({ open }: { open: boolean }) => {
  if (!open) return null;

  return (
    <div className="md:hidden p-4">
      {headerMenu.map((item) => (
        <div key={item.label} className="mb-4">
          <a
            href={item.href || "#"}
            className="block font-medium text-black text-lg"
          >
            {item.label}
          </a>

          {item.type === "mega" && item.sections && (
            <div className="ml-4 mt-2">
              {item.sections.map((s: any) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="block text-sm py-1"
                >
                  {s.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
