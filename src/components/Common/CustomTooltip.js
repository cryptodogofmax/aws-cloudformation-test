import { VictoryLabel, VictoryTooltip } from "victory";

export default function CustomTooltip(props) {
  const { x } = props;
  return (
    <g>
      <VictoryTooltip
        {...props}
        flyoutComponent={
          <g>
            <line
              transform={`translate(${x}, 50)`}
              x1={0}
              y1={300}
              stroke="white"
              strokeWidth={0.5}
            />
          </g>
        }
        labelComponent={
          <VictoryLabel
            style={{ color: "black" }}
            backgroundPadding={5}
            backgroundStyle={{ fill: "white", stroke: "black" }}
          />
        }
      />
    </g>
  );
}
