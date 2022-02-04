import "./App.css";
import * as features from "./components/features";

function App(props) {
  const options = {
    products: [
      {
        key: "FeatureOne",
        name: "name set 1",
        minValue: {
          type: "CapitalRangeAge",
          default: 60000.0,
          ranges: [{ maxAge: 30, value: 80000.0 }],
        },
      },
      {
        key: "FeatureTwo",
        name: "name set 2",
        minValue: {
          type: "CapitalRangeAge",
          default: 60000.0,
          ranges: [{ maxAge: 29, value: 70000.0 }],
        },
      },
    ],
  };

  const model = {
    age: 29,
  };

  return (
    <div className="App">
      <header className="App-header">
        {options.products.map((product) => {
          let FeatureComponent = features[product.key];
          return (
            <FeatureComponent
              key={product.name}
              product={product}
              model={model}
              {...props}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
