import React from 'react';
import LeagueList from './LeagueList';
import TeamList from './TeamList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className='ui row'>
                <div className='coloumn eight wide'>
                    <LeagueList />
                </div>
                <div className='coloumn eight wide'>
                    <TeamList />
                </div>
            </div>
        </div>
    );
};

export default App;