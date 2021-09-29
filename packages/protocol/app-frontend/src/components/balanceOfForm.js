import React, { useState } from "react";

function BalanceOfForm(props) {
  const [streamId, setStreamId] = useState("");
  const [addressOf_Who, setAddressOf_Who] = useState("");
  const [DataID, setDataID] = useState("");


  
  
  return (
    <form>
      <input
        value={streamId}
        onChange={e => setStreamId(e.target.value)  }
        placeholder="Stream ID"
        type="number"
        name="streamId"
        required
      />
     
      <input
        value={addressOf_Who}
        onChange={e => setAddressOf_Who(e.target.value)}
        placeholder="Address of the person"
        type="text"
        name="addressOf_Who"
        required
      />
     
      <button type="submit">Submit</button>
    </form>
  );
}
export default BalanceOfForm;