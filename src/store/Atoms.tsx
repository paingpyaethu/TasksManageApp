import {atom} from 'jotai';
import {atomWithMMKVStorage} from './AtomWithMMKVStorage';

// Peristance Atoms
export const isAuthenticatedAtom = atomWithMMKVStorage('@isAuth', false);
export const taskListAtom = atomWithMMKVStorage<TaskType[]>('@taskList', []);

// Normal Atoms
export const isLoadingAtom = atom(false);
