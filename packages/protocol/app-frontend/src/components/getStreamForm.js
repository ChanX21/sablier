import React, { useState } from "react";

function GetStreamForm() {
  const [streamId, setStreamId] = useState("");
  
  
  return (
    <form>
      <input
        value={streamId}
        onChange={e => setStreamId(e.target.value)}
        placeholder="Stream ID"
        type="number"
        name="streamId"
        required
      />
     
      <button type="submit">Submit</button>
    </form>
  );
}
export default GetStreamForm;