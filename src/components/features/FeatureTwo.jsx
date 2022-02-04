import { factory } from "../../rules";

function FeatureTwo(props) {
  const { product, model } = props;

  const capital = factory(product.minValue);
  const minCapital = capital.getCapital(model);

  return (
    <>
      <p>Feature Two</p>
      <span>Minimum Capital: {minCapital}</span>
    </>
  );
}

export default FeatureTwo;
