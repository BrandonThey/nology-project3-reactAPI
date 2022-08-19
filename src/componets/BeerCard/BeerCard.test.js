import BeerCard from "./BeerCard";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import beers from "../../data/beers";

it("Should render all the beer information", () => {
    render(<BeerCard filteredBeersArr={beers}/>);
    const beerInfoH2Arr = screen.getAllByRole("heading");
    const beerInfoImgArr = screen.getAllByRole("img");
    const beerInfoButtonArr = screen.getAllByRole("button");

    beerInfoH2Arr.forEach((heading) => {
        expect(heading).toBeInTheDocument();
    })

    beerInfoImgArr.forEach((image) => {
        expect(image).toBeInTheDocument();
    })
    
    beerInfoButtonArr.forEach((button) => {
        expect(button).toBeInTheDocument();
    })
})

it("Should render all the beer descriptions and pairings after a button click", () => {
    render(<BeerCard filteredBeersArr={beers}/>);

    const beerInfoButtonArr = screen.getAllByRole("button");
    beerInfoButtonArr.forEach((button) => {
        userEvent.click(button);
    })

    const beerInfoHeadings = screen.getAllByRole("heading");

    beerInfoHeadings.forEach((heading) => {
        expect(heading).toBeInTheDocument();
    })
})

it("Should rerender all the beer information after a second button click", () => {
    render(<BeerCard filteredBeersArr={beers}/>);
    const beerInfoButtonArr = screen.getAllByRole("button");
    beerInfoButtonArr.forEach((button) => {
        userEvent.click(button);
    })

    const beerInfoReturnArr = screen.getAllByRole("button");
    beerInfoReturnArr.forEach((button) => {
        userEvent.click(button);
    })

    const beerInfoH2Arr = screen.getAllByRole("heading");
    const beerInfoImgArr = screen.getAllByRole("img");

    beerInfoH2Arr.forEach((heading) => {
        expect(heading).toBeInTheDocument();
    })

    beerInfoImgArr.forEach((image) => {
        expect(image).toBeInTheDocument();
    })
    
})

it("Should render all the correct beer information", () => {
    render(<BeerCard filteredBeersArr={beers}/>);
    
    beers.forEach((beer) => {
        const beerInfoH2 = screen.queryByText(beer.name);
        const beerInfoImg = screen.queryByAltText(beer.name);
        const beerInfoButton = screen.queryAllByText("Learn More!");

        expect(beerInfoH2).toBeInTheDocument();
        expect(beerInfoImg).toBeInTheDocument();
        expect(beerInfoButton).toBeTruthy();
    })
})