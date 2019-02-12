import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PeopleList from '../../components/PeopleList';
import Preload from 'src/ui-components/Preload';
import { getPeople } from './duck';
import {
  getPeopleFromState,
  getNextPage,
  getTotalCountFromState,
  getIsFetchingFromState,
} from './selectors';
import { IMapDispatchToApp, IMapStateToApp } from './interfaces';
import { IStore } from 'src/core/reducers/interfaces';

const mapStateToProps = (state: IStore) => ({
  isFetching: getIsFetchingFromState(state),
  peopleList: getPeopleFromState(state),
  nextPage: getNextPage(state),
  totalCount: getTotalCountFromState(state),
});

const mapDispatchToProps = {
  getPeople,
};

type IPeople = IMapStateToApp & IMapDispatchToApp;

class People extends Component<IPeople, {}> {
  componentDidMount() {
    this.getMorePeople();
  }

  getMorePeople = () => {
    this.props.getPeople();
  };

  render() {
    const { peopleList, nextPage, isFetching } = this.props;
    return (
      <Fragment>
        <PeopleList peopleList={peopleList} />
        <div>
          {!!nextPage && !isFetching && <button onClick={this.getMorePeople}>больше</button>}
          {isFetching && <Preload />}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);
