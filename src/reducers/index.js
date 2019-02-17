import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, actions) {
    const { counters } = state;

    switch ( actions.type) {
        case types.CREATE:
        return {
            counters: [
                ...counters,
                {
                    color: actions.color,
                    number: 0
                }
            ]
        }

        case types.REMOVE:
        return {
            counters: counters.slice(0, counters.length -1 )
        }

        case types.INCREMENT:
        return {
            counters: [
                ...counters.slice(0, actions.index),
                {
                    ...counters[actions.index],
                    number: counters[actions.index].number + 1
                },
                ...counters.slice(actions.index + 1, counters.length)
            ]
        }

        case types.DECREMENT:
        return {
            counters: [
                ...counters.slice(0, actions.index),
                {
                    ...counters[actions.index],
                    number: counters[actions.index].number - 1
                },
                ...counters.slice(actions.index + 1, counters.length)
            ]
        }

        case types.SET_COLOR:
        return {
            counters: [
                ...counters.slice(0, actions.index),
                {
                    ...counters[actions.index],
                    color: actions.color
                },
                ...counters.slice(actions.index + 1, counters.length)
            ]
        }
        default:
        return state;
    }
}

export default counter;