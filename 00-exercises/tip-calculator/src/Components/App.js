import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import TotalBill from "./TotalBill";

function App() {
  const [bill, setBill] = useState(null);
  const [tipRateFirst, setFirstTipRate] = useState(null);
  const [tipRateSecondary, setSecondaryTipRate] = useState(null);

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
      <SelectPercentage onSelectTipRate={handleSetFirstTipRate}>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage onSelectTipRate={handleSetSecondTipRate}>
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      <TotalBill bill={totalbill} tip={tip}></TotalBill>
    </div>
  );
}

export default App;
