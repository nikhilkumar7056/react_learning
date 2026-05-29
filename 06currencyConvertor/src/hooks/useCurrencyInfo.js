import { useEffect, useState } from "react";

function useCurrencyInfo(amount,from,to) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!from||!to) return;
        

        fetch(
            `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}` 
        )
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((res) => {
                setData(res[to]*amount);
            })
            .catch((err) => console.error("Currency fetch error:", err))
            .finally(() => setLoading(false));
    }, [amount,from,to]);

    return { data, loading };
}

export default useCurrencyInfo;