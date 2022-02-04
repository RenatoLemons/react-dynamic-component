import { factory } from "../../rules";

function FeatureOne(props) {
  const { product, model } = props;

  const capital = factory(product.minValue);
  const minCapital = capital.getCapital(model);

  return (
    <>
      <p>Feature One</p>
      <span>MinValue: {minCapital}</span>
    </>
  );
}

export default FeatureOne;
