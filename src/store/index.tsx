import { proxy } from "valtio";

export const enum ActivePage {
    page1,
    page2,
    page3,
}

export const appUi = proxy<{ activePage: ActivePage; }>({
    activePage: ActivePage.page1,
});
