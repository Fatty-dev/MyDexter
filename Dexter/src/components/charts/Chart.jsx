import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
const chartData = [
  { month: "January", optimization: 186, engagement: 80 },
  { month: "February", optimization: 305, engagement: 200 },
  { month: "March", optimization: 237, engagement: 120 },
  { month: "April", optimization: 73, engagement: 190 },
  { month: "May", optimization: 209, engagement: 130 },
  { month: "June", optimization: 214, engagement: 140 },
];

const chartConfig = {
  optimization: {
    label: "Domain Optimization Trend",
    color: "hsl(var(--chart-1))",
  },
  engagement: {
    label: "Website Engagement Trend",
    color: "hsl(var(--chart-2))",
  },
  // visibility: {
  //   label: "Overall Visibility",
  //   color: "#FFC107",
  // },
};

// Legend Configuration
const legendConfig = [
  { label: "Domain Optimization Trend", color: "hsl(var(--chart-1))" },
  { label: "Website Engagement Trend", color: "hsl(var(--chart-2))" },
  { label: "Overall Visibility.", color: "#FFC107" },
];

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative right-12">
          Visibility Over Time
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={chartConfig}
          className="h-[150px] w-full lg:w-[90%] border-b border-gray-300 border-l "
        >
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              stroke="#687181"
              strokeWidth={0.8}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="optimization"
              type="monotone"
              stroke="var(--color-optimization)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="engagement"
              type="monotone"
              stroke="var(--color-engagement)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
          <div className="mt-4 flex justify-center gap-6">
            {legendConfig.map((item, index) => (
              <div key={index} className="flex items-center gap-2 "> <span
                  className="block h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-[10px] text-[#596473] font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
