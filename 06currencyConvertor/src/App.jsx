import { useState } from 'react'
import { InputBox } from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("INR")

    const {data: currencyInfo = {}, loading} = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo||{});

    const convertedAmount =
     currencyInfo[to]
        ? (Number(amount || 0) * Number(currencyInfo[to] || 0)).toFixed(2)
        : 0;

    const swap = () => {
        setFrom(to)
        setTo(from)
        setAmount(parseFloat(convertedAmount)||0)
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                 {loading && (
                        <p className="text-white text-center text-sm mb-2">
                            Fetching rates...
                        </p>
                    )}
                    <form onSubmit={(e) =>  e.preventDefault()}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)} 
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}  
                                amountDisable
                            />
                        </div>
                        <button
                         type="submit" 
                         className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App