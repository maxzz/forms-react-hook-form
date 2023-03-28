import { ActivePage, appUi } from "../../store";

function MenuItem({name, label}: {name: ActivePage, label: string}) {
    return (
        <button className="" onClick={() => appUi.activePage = name}>{label}</button>
    );
}

export function Menu() {
    return (
        <nav className="px-4 py-2">
            <MenuItem name={ActivePage.page1} label="Page 1"/>
            <MenuItem name={ActivePage.page2} label="Page 2"/>
            <MenuItem name={ActivePage.page3} label="Page 3"/>
        </nav>
    );
}
