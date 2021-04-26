import { atom } from 'recoil';

// Store user auth data
const authenticated = atom({
    key: 'authenticated',
    default: {
        check: true,
        data: []
    }
});

export { authenticated };