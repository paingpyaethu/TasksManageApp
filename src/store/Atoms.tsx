import {atomWithMMKVStorage} from './AtomWithMMKVStorage';

// Peristance Atoms
export const isAuthenticatedAtom = atomWithMMKVStorage('@isAuth', false);
export const isAlreadyRegisteredAtom = atomWithMMKVStorage(
  '@isAlreadyReg',
  false,
);
export const userNameAtom = atomWithMMKVStorage('@userName', '');
export const passwordAtom = atomWithMMKVStorage('@password', '');
export const taskListAtom = atomWithMMKVStorage<TaskType[]>('@taskList', []);
