import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLeague } from '../actions';

class LeagueList extends Component {
    renderList() {
        return this.props.leagues.map((league) => {
            return (
                <div className='item' key={league.id}>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectLeague(league)}
                        >Select</button>
                    </div>
                    <div className='content'>{league.name}</div>
                </div>
            );
        });
    }
    render() {
        return <div className='ui divided list'>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { leagues: state.leagues };
};

export default connect(
    mapStateToProps,
    {selectLeague}
)(LeagueList);