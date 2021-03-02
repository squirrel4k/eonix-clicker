import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Counter from '../../views/Counter';
import { makeSelectCounterContainer } from '../CounterContainer/selector';
import { incrementAction, decrementAction } from './action';
import { useInjectReducer } from '../../utils/injectReducer';

import reducer from '../CounterContainer/reducer';

const key = 'counterContainer';

function CounterContainer(props) {
  useInjectReducer({ key, reducer });

  return (<Counter {...props} />);
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounterContainer(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(CounterContainer);