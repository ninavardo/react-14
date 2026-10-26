import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

describe("Message", () => {
  it("does not show the text when the component first renders", () => {
    render(<Message />);

    expect(screen.queryByText("Hello World!")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Show Message" })).toBeInTheDocument();
  });

  it("shows Hello World when the button is clicked", async () => {
    const user = userEvent.setup();

    render(<Message />);

    await user.click(screen.getByRole("button", { name: "Show Message" }));

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("hides Hello World when the button is clicked again", async () => {
    const user = userEvent.setup();

    render(<Message />);

    await user.click(screen.getByRole("button", { name: "Show Message" }));
    await user.click(screen.getByRole("button", { name: "Hide Message" }));

    expect(screen.queryByText("Hello World!")).not.toBeInTheDocument();
  });

  it("changes the button text when clicked", async () => {
    const user = userEvent.setup();

    render(<Message />);

    const showButton = screen.getByRole("button", { name: "Show Message" });
    await user.click(showButton);

    expect(screen.getByRole("button", { name: "Hide Message" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Hide Message" }));

    expect(screen.getByRole("button", { name: "Show Message" })).toBeInTheDocument();
  });
});
