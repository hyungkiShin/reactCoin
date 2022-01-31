import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
interface IHistorycal {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data?.map((price) => price.close));
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => {
                return { y: price.close, x: price.time_close };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: { curve: "smooth" },
            grid: { show: false },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
