import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './counter.scss';

export default class Counter extends Component {
  static propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.incrementCounter()
  }

  decrement = () => {
    this.props.decrementCounter()
  }

  render() {
    return (
      <div>
        <h2 className={styles.cardTitle}>Contador</h2>
        <div className={styles.card}>
          <h3 className={styles.description}>{this.props.value}</h3>
          <div className={styles.row}>
            <button className={styles.tecButton} onClick={this.increment}>Adicionar</button>
            <button className={styles.tecButton} onClick={this.decrement}>Diminuir</button>
          </div>
        </div>
      </div>
    )
  }
}
