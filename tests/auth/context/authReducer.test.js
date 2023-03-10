import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en el authReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('Debe llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'Uriel'
      }
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('Debe borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Uriel' }
    }

    const action = {
      type: types.logout
    }

    const newState = authReducer(state, action)
    expect(newState).toEqual({ logged: false })
  })
})
