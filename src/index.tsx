import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import 'global.css'
import App from 'components/App'
import { Provider } from 'react-redux'
import { store } from 'lib/store'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
