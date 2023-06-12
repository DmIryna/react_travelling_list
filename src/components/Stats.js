const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    )
  }

  const numItems = items.length
  const numPackedItems = items.filter((item) => item.packed === true).length
  const percentage = Math.round((numPackedItems / numItems) * 100)

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed. Ready to go ✈️"
          : `You have ${numItems} items in your list, and you already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  )
}

export default Stats
