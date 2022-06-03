import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe("header", () => {

  test("renders header", () => {
    render(<Header />);
    const element = screen.getByText(/George FE Test - Krisztián Sáfár/);
    expect(element).toBeInTheDocument();
  });

  test("renders header with search", () => {
    const filterText = "testFilter"
    render(<Header filter={filterText} />);

    const filterInput = screen.getByDisplayValue(filterText)
    expect(filterInput).toBeInTheDocument();
  });

})