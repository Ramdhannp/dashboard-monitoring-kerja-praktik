import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ramdhan/i);
  expect(linkElement).toBeInTheDocument();
});
