
// const [coins, setCoins] = useState<ICoin[]>([]);
// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   (async () => {
//     const res = await fetch("https://api.coinpaprika.com/v1/coins");
//     const json = await res.json();
//     console.log(json);
//     setCoins(json.slice(0, 100));
//     setLoading(false);
//   })();
// }, []);

const BASE_URL = `https://api.coinpaprika.com/v1`
export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) =>
        response.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json());
}