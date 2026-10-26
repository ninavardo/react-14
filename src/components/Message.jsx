import { useState } from "react";

function Message() {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-6 border border-gray-300 bg-white p-4">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="bg-blue-600 px-4 py-2 text-white"
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p className="mt-3">Hello World!</p>}
    </div>
  );
}

export default Message;
