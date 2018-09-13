import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import cookie from 'js-cookie'

const feathersStorage = {
  getItem: key => cookie.get(key),
  removeItem: key => cookie.remove(key),
  setItem: (key, value) => cookie.set(key, value)
}

const socket = io('http://localhost:3030', {transports: ['websocket']})

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: feathersStorage }))

export default feathersClient
