import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter/Counter';
import * as CounterActions from '../actions/counter'

const App = ({counters ,actions}) => (
  <div>
    <Counter value={counters.value}  incrementCounter={actions.incrementCounter} decrementCounter={actions.decrementCounter} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  counters: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
