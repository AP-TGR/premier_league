import {combineReducers} from 'redux';

const leaguesReducer = () => {
    return [
        {id: 1, 'name': 'League 1'},
        {id: 2, 'name': 'League 2'},
        {id: 3, 'name': 'League 3'},
    ];
};

const selectedLeagueReducer = (selectedLeague = null, action) => {
    if (action.type === 'SELECT_LEAGUE') {
        return action.payload;
    }

    return selectedLeague;
};

export default combineReducers({
    leagues: leaguesReducer,
    selectedLeague: selectedLeagueReducer
});