import { render, screen } from "@testing-library/react";

import { anHour, aSchedule } from "@/__mocks__/schedule.mock";

import Hours from "./Hours";

describe("Hours", () => {
  it("shows a day, an opening and closing time", () => {
    render(
      <Hours
        day="tuesday"
        schedule={aSchedule({
          tuesday: anHour(),
        })}
        today="monday"
      />
    );
    expect(
      screen.getByRole("heading", { name: "tuesday" })
    ).toBeInTheDocument();
    expect(screen.getByText("1 AM")).toBeInTheDocument();
    expect(screen.getByText("12 PM")).toBeInTheDocument();
  });

  it("shows closed if there are no opening times", () => {
    render(<Hours day="tuesday" schedule={aSchedule({})} today="monday" />);
    expect(screen.getByText("Closed")).toBeInTheDocument();
  });

  it("shows 'Today' when matches the current cell", () => {
    render(<Hours day="monday" schedule={aSchedule()} today="monday" />);
    expect(screen.getByText("Today")).toBeInTheDocument();
  });

  it("shows a comma when there're more than two opening times in the same day", () => {
    const { rerender } = render(
      <Hours
        day="thursday"
        schedule={aSchedule({
          thursday: [
            { type: "open", value: 36000 },
            { type: "close", value: 64800 },
            { type: "open", value: 72000 },
            { type: "close", value: 79200 },
          ],
        })}
        today="monday"
      />
    );
    expect(screen.getByText(",")).toBeInTheDocument();

    rerender(
      <Hours
        day="thursday"
        schedule={aSchedule({
          thursday: [
            { type: "open", value: 36000 },
            { type: "close", value: 64800 },
          ],
        })}
        today="monday"
      />
    );
    expect(screen.queryByText(",")).not.toBeInTheDocument();
  });
});
