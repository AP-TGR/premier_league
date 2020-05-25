import React from 'react';
import { connect } from 'react-redux';

const TeamList = props => {
    console.log(props);
    return(
        <div>Team list of league</div>
    );
};

const mapStateToProps = (state) => {
    return { league: state.selectedLeague }
};

export default connect(mapStateToProps)(TeamList);