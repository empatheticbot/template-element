import { screen } from '@testing-library/dom'
import './templateCustomElement'

test('renders templated custom element', async () => {
  document.body.innerHTML = `
      <template-custom data-testid="element"></template-custom>
    `

  const customElement = screen.queryByTestId('element')
  expect(customElement).toHaveTextContent('hello world!!')
})
