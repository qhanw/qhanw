import Link from "next/link";

const social = [
  { name: "GitHub", href: "http://github.com/qhanw", icon: "iconify logos--github" },
  {
    name: "掘金",
    href: "https://juejin.cn/user/342703357833255",
    icon: "iconify logos--juejin",
  },
  { name: "语雀", href: "https://www.yuque.com/qhan", icon: "iconify logos--yuque" },
];

export default function Social() {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {social.map((c) => (
        <Link
          key={c.href}
          className="opacity-50 hover:opacity-80 font-normal text-brand"
          href={c.href}
          title={c.name}
          target="_blank"
        >
          <span className={`${c.icon} w-4 h-4 mr-1`} />
          {c.name}
        </Link>
      ))}
    </div>
  );
}
