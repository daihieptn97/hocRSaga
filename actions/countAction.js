import {DOWN_COUNT, UP_COUNT} from '../constants';
//
export const upCount = (val = 1) => {
    //alert('Count Action Up Count ' + val);
    return {type: UP_COUNT, val};
};

export const apiFetchDemo = () => {
    try {
        return fetch('https://reactnative.dev/movies.json1')
            .then((response) => (response.status === 200) ? response.json() : response)
            .then((json) => {
                return json.data;
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export function downCount(val = 1) {
    return {type: DOWN_COUNT, val};
}
