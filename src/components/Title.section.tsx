import { observer } from "mobx-react";
import { rootStore } from "../store/global.store";

interface TitleSectionI {
  title: string;
}

export const TitleSection = observer(({ title }: TitleSectionI) => {
  const { activeColor } = rootStore.themeColors;
  return (
    <div className="lg:mt-0 mt-12">
      <h2 className="xs:text-3xl text-2xl font-medium mb-3">{title}</h2>
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
    </div>
  );
});
