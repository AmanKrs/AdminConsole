import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AreaChartComp(props) {
  return (
    <ResponsiveContainer width="95%" height="85%">
      <AreaChart
        width={500}
        height={500}
        data={props.data}
        margin={{
          top: 20,
          right: 0,
          left: 20,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="blue" stopOpacity={0.7} />
            <stop offset="95%" stopColor="blue" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colordr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="red" stopOpacity={0.7} />
            <stop offset="95%" stopColor="red" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="green" stopOpacity={0.7} />
            <stop offset="95%" stopColor="green" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="discountPercent"
          stroke="red"
          fill="url(#colordr)"
          fillOpacity={1}
        />
        <Area
          type="monotone"
          dataKey="SalesAmt"
          stroke="green"
          fill="url(#colorun)"
          fillOpacity={1}
        />
        <Area
          type="monotone"
          dataKey="inStock"
          stroke="blue"
          fill="url(#colorPv)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
