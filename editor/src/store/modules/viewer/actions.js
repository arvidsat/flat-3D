import setSmoothContext from '../../../util/setSmoothContext'

import {
  SET_VIEWER_CONTEXT,
  SET_VIEWER_EDITOR,
  SET_VIEWER_ROTATION,
} from './mutations'

import {
  GET_VIEWER_CONTEXT,
  GET_VIEWER_EDITOR,
  GET_VIEWER_POSITION,
  GET_VIEWER_SIZE,
  GET_VIEWER_ROTATION,
  GET_VIEWER_DELTA_ROTATION,
  GET_VIEWER_SCALE,
} from './getters'

export const INIT_VIEWER = 'INIT_VIEWER'
export const SET_VIEWER_SCALE = 'SET_VIEWER_SCALE'
export const SET_VIEWER_CONTEXT_SMOOTH = 'SET_VIEWER_CONTEXT_SMOOTH'

export default {
  [INIT_VIEWER]: (store) => {
    const canvas = document.getElementById('viewer-canvas')
    const context = canvas.getContext('2d')
    setSmoothContext(context, false)
    store.commit(SET_VIEWER_EDITOR, { canvas })
    store.commit(SET_VIEWER_CONTEXT, { context })
    store.dispatch(SET_VIEWER_SCALE)
  },
  [SET_VIEWER_SCALE]: (store) => {
    const ctx = store.getters[GET_VIEWER_CONTEXT]
    const scale = store.getters[GET_VIEWER_SCALE]
    ctx.scale(scale, scale)
  },
}
