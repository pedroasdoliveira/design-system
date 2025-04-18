import { colors } from "@design-ui/tokens";
import { getContrast } from 'polished';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#fff") < 3.5 ? "#000" : "#fff",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
