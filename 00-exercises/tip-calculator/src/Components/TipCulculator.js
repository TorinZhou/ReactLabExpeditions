import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import TotalBill from "./TotalBill";
import Reset from "./Reset";

function TipCulculator() {
  const [bill, setBill] = useState("");

  // should I pass the two stats into the components to make it a controlled element.
  // should I dereactly pass the setState in to the components and handle the business logic inside the component rather than doing it here
  const [tipRateFirst, setFirstTipRate] = useState(0);
  const [tipRateSecondary, setSecondaryTipRate] = useState(0);

  const handleInputBill = (bill) => setBill(bill);

  const handleSetFirstTipRate = (rate) => setFirstTipRate(rate);
  const handleSetSecondTipRate = (rate) => setSecondaryTipRate(rate);

  // if I have multiple customer come together, how can I generate a list of tipRate for each of them seperately and automaticlly, here I hard coded two rates
  const tipRate = (tipRateFirst + tipRateSecondary) / 2;
  const tip = Math.round(tipRate * bill);
  const totalbill = Math.round((1 + tipRate) * bill);

  console.log(tipRate);

  return (
    <div className="App">
      <BillInput bill={bill} onInputBill={handleInputBill}>
        How much was the bill?
      </BillInput>
      <SelectPercentage
        rate={tipRateFirst}
        onSelectTipRate={handleSetFirstTipRate}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        rate={tipRateSecondary}
        onSelectTipRate={handleSetSecondTipRate}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <TotalBill bill={totalbill} tip={tip}></TotalBill>
          <Reset
            onReset={() => {
              setBill("");
              setFirstTipRate(0);
              setSecondaryTipRate(0);
            }}
          ></Reset>
        </>
      )}
    </div>
  );
}

export default TipCulculator;
