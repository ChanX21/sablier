import React, { useState } from "react";

function CancelStreamForm() {
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
export default CancelStreamForm;