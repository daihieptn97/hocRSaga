import {DOWN_COUNT, UP_COUNT} from '../constants';

const dataDefault = {
    number: 0,
    hello: 'xin chao',
};

const counterReducer = (state = dataDefault, action) => {
    //console.log(action);
    switch (action.type) {
        case UP_COUNT : {
            return {...state, number: state.number + action.val};

        }
        case DOWN_COUNT : {
            return {...state, number: state.number - action.val};
        }

        default :
            break;
    }
    return state;
};


export default counterReducer;
