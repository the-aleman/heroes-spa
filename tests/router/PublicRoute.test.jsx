import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'

describe('Pruebas en el <PublicRoute/>', () => {
  test('Debe mostrar el children si no está autenticado', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta pública')).toBeTruthy()
  })
})
