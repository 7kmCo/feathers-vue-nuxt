export default function ({ store, redirect }) {
  if (!store.state.auth.payload) {
    return redirect('/login')
  }
}