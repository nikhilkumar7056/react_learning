import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!currency) return;

        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Currency fetch error:", err))
            .finally(() => setLoading(false));
    }, [currency]);

    return { data, loading };
}

export default useCurrencyInfo;