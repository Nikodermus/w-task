import { render, screen } from "@testing-library/react";

import { aQueryResponse } from "@/__mocks__/useQuery.mock";

import AsyncWrapper from "./AsyncWrapper";

describe("AsyncWrapper", () => {
  it("renders a component once the data is available", () => {
    const { rerender } = render(
      <AsyncWrapper query={aQueryResponse()}>
        <AsyncWrapper.Data>
          <p>Hello Munich</p>
        </AsyncWrapper.Data>
      </AsyncWrapper>
    );
    expect(screen.queryByText("Hello Munich")).not.toBeInTheDocument();

    rerender(
      <AsyncWrapper query={aQueryResponse({ data: {} })}>
        <AsyncWrapper.Data>
          <p>Hello Munich</p>
        </AsyncWrapper.Data>
      </AsyncWrapper>
    );
    expect(screen.getByText("Hello Munich")).toBeInTheDocument();
  });

  it("renders a loader while data is unavailable", () => {
    render(
      <AsyncWrapper query={aQueryResponse()}>
        <AsyncWrapper.Loading>
          <p>Loading El Cairo...</p>
        </AsyncWrapper.Loading>

        <AsyncWrapper.Data>
          <p>Hello El Cairo</p>
        </AsyncWrapper.Data>
      </AsyncWrapper>
    );
    expect(screen.getByText("Loading El Cairo...")).toBeInTheDocument();
  });

  it("renders an error if it enters the error state", () => {
    render(
      <AsyncWrapper query={aQueryResponse({ isError: true })}>
        <AsyncWrapper.Error>
          <p>Error loading London...</p>
        </AsyncWrapper.Error>

        <AsyncWrapper.Data>
          <p>Hello London</p>
        </AsyncWrapper.Data>
      </AsyncWrapper>
    );

    expect(screen.getByText("Error loading London...")).toBeInTheDocument();
  });

  it("can only render one of the three states, with preference over showing errors", () => {
    render(
      <AsyncWrapper
        query={aQueryResponse({
          isError: true,
          data: {},
        })}
      >
        <AsyncWrapper.Data>
          <p>Hello Madrid</p>
        </AsyncWrapper.Data>

        <AsyncWrapper.Loading>
          <p>Loading Madrid...</p>
        </AsyncWrapper.Loading>

        <AsyncWrapper.Error>
          <p>Error loading Madrid...</p>
        </AsyncWrapper.Error>
      </AsyncWrapper>
    );

    expect(screen.getByText("Error loading Madrid...")).toBeInTheDocument();

    expect(screen.queryByText("Hello Madrid")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading Madrid...")).not.toBeInTheDocument();
  });

  it("ignores anything outside the util components", () => {
    const { rerender } = render(
      <AsyncWrapper query={aQueryResponse()}>
        <p>Hello Copenhagen</p>
      </AsyncWrapper>
    );
    expect(screen.queryByText("Hello Copenhagen")).not.toBeInTheDocument();

    rerender(
      <AsyncWrapper query={aQueryResponse({ data: {} })}>
        <p>Hello Copenhagen</p>
      </AsyncWrapper>
    );
    expect(screen.queryByText("Hello Copenhagen")).not.toBeInTheDocument();

    rerender(
      <AsyncWrapper query={aQueryResponse({ isError: true })}>
        <p>Hello Copenhagen</p>
      </AsyncWrapper>
    );
    expect(screen.queryByText("Hello Copenhagen")).not.toBeInTheDocument();
  });
});
