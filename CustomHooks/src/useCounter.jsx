import { useState } from "react";

function useCounter(intialValue = 0)
{
    const [count, setCount] = useState(intialValue);
    const increement = () => setCount(count + 1);
    const decreement = () => setCount(count - 1);
    const reset = () => setCount(intialValue);

    return { count, increement, decreement, reset };
}

export default useCounter;