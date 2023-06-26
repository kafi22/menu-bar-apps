import { useState } from "react"
import Menu from "./Component/Menu"
import Title from "./Component/Title"
import Data from "./Data"
import Category from "./Component/Category"

const App = () => {

 
  const categoryItems = ['all', ...new Set(Data.map(item => item.category))]
  const [data, setData] = useState(Data)
  const [category, setCategory] = useState(categoryItems)

  const filterCategory = (category) => {

    if(category === 'all') {
      setData(Data)
      return;
    }
    const filterItems = Data.filter(item => item.category === category)
    setData(filterItems)
  }

  const title = 'Menu bar'

  return (
    <div className=" container mx-auto max-w-6xl p-4">
    <Title title={title} />
    <Category category={category} filterCategory={filterCategory} />
    <Menu data={data} />
    </div>
  )
}

export default App