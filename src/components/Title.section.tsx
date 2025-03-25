import { rootStore } from "../store/global.store";

interface TitleSectionI {
  title: string;
}

export function TitleSection({ title }: TitleSectionI) {
  const { activeColor } = rootStore.themeColors;
  return (
    <>
      <h2 className="text-3xl font-medium mb-3">{title}</h2>
      <div className="flex flex-col gap-2 mb-10">
        <div
          className="w-16 h-1 bg-[var(--my-color)] rounded-lg"
          style={{ "--my-color": activeColor } as React.CSSProperties}
        ></div>
        <div
          className="w-10 h-1 bg-[var(--my-color)] rounded-lg"
          style={{ "--my-color": activeColor } as React.CSSProperties}
        ></div>
      </div>
    </>
  );
}
