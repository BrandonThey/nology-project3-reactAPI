import BeerInfo from "./BeerInfo";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import beers from "../../data/beers";

render(<BeerInfo beer={beers[0]}/>);
it("Should render the beer information", () => {

    const beerInfoH2 = screen.getByRole("heading");
    const beerInfoImg = screen.getByRole("img");
    const beerInfoButton = screen.getByRole("button");

    expect(beerInfoH2).toBeInTheDocument();
    expect(beerInfoImg).toBeInTheDocument();
    expect(beerInfoButton).toBeInTheDocument();
})

it("Should render the beer description and pairing after a button click", () => {
    render(<BeerInfo beer={beers[0]}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const beerInfoHeadings = screen.getAllByRole("heading");

    beerInfoHeadings.forEach((heading) => {
        expect(heading).toBeInTheDocument();
    })
})

it("Should rerender the beer information after a second button click", () => {
    render(<BeerInfo beer={beers[0]}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);
    const returnButton = screen.getByRole("button");
    userEvent.click(returnButton);

    const beerInfoH2 = screen.getByRole("heading");
    const beerInfoImg = screen.getByRole("img");
    const beerInfoButton = screen.getByRole("button");

    expect(beerInfoH2).toBeInTheDocument();
    expect(beerInfoImg).toBeInTheDocument();
    expect(beerInfoButton).toBeInTheDocument();
})

it("Should render the correct information", () => {
    render(<BeerInfo beer={beers[0]}/>);
    const beer = beers[0];
    const beerInfoH2 = screen.queryByText(beer.name);
    const beerInfoImg = screen.queryByAltText(beer.name);
    const beerInfoButton = screen.queryByText("Learn More!");

    expect(beerInfoH2).toBeInTheDocument();
    expect(beerInfoImg).toBeInTheDocument();
    expect(beerInfoButton).toBeInTheDocument();
})