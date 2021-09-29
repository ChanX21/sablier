import React, { useState } from "react";

function CreateStreamForm(props) {
  const [recepientAddress, setRecepientAddress] = useState("");
  const [deposit, setDeposit] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [unixStartTime, setUnixStartTime] = useState("");
  const [unixStopTime, setUnixStopTime] = useState("");

  () => {
    useState[4567]
  }

  return (
    <form>
      <input
        value={recepientAddress}
        onChange={e => setRecepientAddress(e.target.value)}
        placeholder="Recepient Address"
        type="text"
        name="recepientAddress"
        required
      />
      <input
        value={deposit}
        onChange={e => setDeposit(e.target.value)}
        placeholder="Deposit"
        type="number"
        name="deposit"
        required
      />
      <input
        value={tokenAddress}
        onChange={e => setTokenAddress(e.target.value)}
        placeholder="Token Address"
        type="text"
        name="tokenAddress"
        required
      />
      <input
        value={unixStartTime}
        onChange={e => setUnixStartTime(e.target.value)}
        placeholder="Start Time (Unix Time)"
        type="number"
        name="unixStartTime"
        required
      />
      <input
        value={unixStopTime}
        onChange={e => setUnixStopTime(e.target.value)}
        placeholder="Stop Time (Unix Time)"
        type="number"
        name="unixStopTime"
        required
      />
     
      <button type="submit">Submit</button>
    </form>
  );
}
export default CreateStreamForm;