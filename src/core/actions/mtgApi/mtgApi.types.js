import {
    APP_CARDSET_ADD_CARDS,
    APP_CARDSET_ADD_CARDSET,

    APP_NEWS_ADD_NEWS,
    APP_LOCATION_ADD_LOCATION,
    APP_TIMETABLE_ADD_SCHEDULE
} from '../../../core/reducers/appContext/appContext.helper';

export function addSetCards(setCode, cards) {
    return {
        type: APP_CARDSET_ADD_CARDS,
        payload: {setCode, cards},
        meta: {}
    };
}

export function addSet(set) {
    return {
        type: APP_CARDSET_ADD_CARDSET,
        payload: {set},
        meta: {}
    };
}

export function addNews(news) {
    return {
        type: APP_NEWS_ADD_NEWS,
        payload: {news},
        meta: {}
    };
}

export function addTimetable(schedule) {
    return {
        type: APP_TIMETABLE_ADD_SCHEDULE,
        payload: {schedule},
        meta: {}
    };
}

export function addLocation(location) {
    return {
        type: APP_LOCATION_ADD_LOCATION,
        payload: {location},
        meta: {}
    };
}
