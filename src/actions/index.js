// Action Creator

export const selectLeague = league => {
    return {
        type: 'SELECT_LEAGUE',
        payload: league
    };
};