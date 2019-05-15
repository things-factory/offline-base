import { store } from '@things-factory/shell'
import { installOfflineWatcher } from 'pwa-helpers/network.js'

import offline from './reducers/offline'
import { UPDATE_OFFLINE } from './actions/offline'

export default function bootstrap() {
  store.addReducers({
    offline
  })

  installOfflineWatcher(offline => {
    store.dispatch({
      type: UPDATE_OFFLINE,
      offline: offline
    })
  })
}
