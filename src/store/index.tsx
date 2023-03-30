import { proxy } from 'valtio';
export { useSnapshot } from 'valtio';

export const enum ActivePage {
    page1,
    page2,
    page3,
}

type AppUi = {
    activePage: ActivePage;
    page3open: boolean;
};

export const appUi = proxy<AppUi>({
    activePage: ActivePage.page3,
    page3open: true,
});
