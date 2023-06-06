import { render, screen } from "@testing-library/react";
import App from "./App";
import Cards from "./components/Cards";
import CardPie from "./components/CardPie";
import Sidebar from "./components/Sidebar";
import CardBar from "./components/CardBar";
import CardLine from "./components/CardLine";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

test("renders sidebar", () => {
  render(<Sidebar />);
  const linkElement = screen.getByText(/monitoring/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Card Jumlah Mahasiswa", () => {
  render(<Cards />);
  const linkElement = screen.getByText(/jumlah mahasiswa/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Card Pie", () => {
  render(<CardPie />);
  const linkElement = screen.getByText("Status KP Tiap Angkatan");
  expect(linkElement).toBeInTheDocument();
});

test("renders Card Bar Chart", () => {
  render(<CardBar />);
  const linkElement = screen.getByText(/cardbar/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Card Line/Stack Chart", () => {
  render(<CardLine />);
  const linkElement = screen.getByText(/line/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Web Monitoring KP", () => {
  render(<App />);
  const linkElement = screen.getByText(/jumlah/i);
  expect(linkElement).toBeInTheDocument();
});
