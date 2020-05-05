import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, canClear, onUndo, onRedo, onClear }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
    <button onClick={onClear} disabled={!canClear}>
      Clear
    </button>
  </p>
)

const mapStateToProps = (state) => {
  return {
    canUndo: state.gamePlay.past.length > 0,
    canRedo: state.gamePlay.future.length > 0,
    canClear: state.gamePlay.past.length > 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
    onClear: () => {
      dispatch(UndoActionCreators.jumpToPast(0))
      dispatch(UndoActionCreators.clearHistory())
    },
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo