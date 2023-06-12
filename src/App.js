import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useState } from "react"

const App = () => {
  const [items, setItem] = useState([])

  const handleAddItem = (item) => {
    setItem((items) => [...items, item])
  }

  const toggleItem = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((item) => item.id !== id))
  }

  const handleClearList = () => {
    setItem([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={toggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
