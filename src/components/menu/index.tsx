import { useSnapshot } from "valtio";
import { ActivePage, appUi } from "../../store";
import { classNames } from "../../utils/classnames";

function MenuItem({ name, label }: { name: ActivePage, label: string; }) {
    const isActive = useSnapshot(appUi).activePage === name;
    return (
        <button
            className={classNames("px-4 py-2 w-full text-left hover:bg-gray-900/10 rounded", isActive && "font-semibold")}
            onClick={() => appUi.activePage = name}
        >
            {label}
        </button>
    );
}

export function Menu() {
    return (
        <nav className="mx-4 py-2 flex flex-col items-start">
            <MenuItem name={ActivePage.page1} label="Basic" />
            <MenuItem name={ActivePage.page2} label="Shared components" />
            <MenuItem name={ActivePage.page3} label="Modal shared components" />
        </nav>
    );
}
