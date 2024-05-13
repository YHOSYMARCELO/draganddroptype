
import Header from "./components/Header.tsx"
import { Filter } from "./components/Filters.tsx"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <div className="app_container" style={{ background: "#e3e3e3" }}>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Filter />
      </DndProvider>

    </div>
  );
}

export default App;
