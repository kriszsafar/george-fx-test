const Header = ({ filter, onChange }) => (
  <div className="app-header">
    <div className="app-title">George FE Test - Krisztián Sáfár</div>
    <div className="search-bar space-around">
      Search
      <input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value.toUpperCase())}>
      </input>
    </div>
  </div>
)

export default Header