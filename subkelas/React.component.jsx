class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Daftar Belanja untuk {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

  
//Model JSX
React.CreateElement("div", {
        className: "shopping-list"
    }, React.CreateElement("h1", null, "Shopping List for", props.name),
    React.CreateElement("ul", null,
        React.CreateElement("li", null, "Instagram"),
        React.CreateElement("li", null, "WhatsApp"),
        React.CreateElement("li", null, "Twitter")))