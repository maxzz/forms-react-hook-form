import { proxy, subscribe } from 'valtio';
export { useSnapshot } from 'valtio';

import { defaultValues, Form2Inputs } from '@/components/page2/controls-data';

const STORAGE_KEY = 'forms-react-hook-form';
const STORAGE_VER = 'v1';

export const enum ActivePage {
    page1,
    page2,
    page3,
}

type AppUi = {
    activePage: ActivePage;
    page3open: boolean;
    form2Inputs: Form2Inputs;
};

const initialAppUi: AppUi = {
    activePage: ActivePage.page3,
    page3open: true,
    form2Inputs: defaultValues,
};

export const appUi = proxy<AppUi>(loadStorageAppUi());

// Local storage

function loadStorageAppUi(): AppUi {
    const storage = localStorage.getItem(STORAGE_KEY);
    if (storage) {
        try {
            const state = JSON.parse(storage);
            return state[STORAGE_VER] || initialAppUi;
        } catch (error) {
        }
    }
    return initialAppUi;
}

subscribe(appUi, () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ [STORAGE_VER]: appUi }));
});
