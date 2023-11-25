import {atom} from 'jotai';
import {atomWithMMKVStorage} from './AtomWithMMKVStorage';

// Peristance Atoms
export const isAuthenticatedAtom = atomWithMMKVStorage('@isAuth', false);

// Normal Atoms
export const isLoadingAtom = atom(false);
