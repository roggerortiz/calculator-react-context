import AppStore from "./context/AppStore"
import Display from "./components/Display"
import Panel from "./components/Panel"

const App = () => {
   return (
      <AppStore>
         <Display />
         <Panel />
      </AppStore>
   )
}

export default App
