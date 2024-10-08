import { get } from '~/utils/http';

export const search = async (q, type = 'less') => {
    try {
        const res = await get(`users/search`, {
            params: { q, type },
        });
        return res.data;
    } catch (error) {}
};
