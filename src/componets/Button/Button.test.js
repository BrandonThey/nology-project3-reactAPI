import Button from "./Button";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import beers from "../../data/beers";

let holderBeers;
let titlesArr = ["All Beers", "High ABV", "Classic Range", "Acidic"];
const handleFilterBeersTest = (filter) => {
    switch(filter){
        case "High ABV":
        holderBeers = beers.filter((beer) => {
            return beer.abv > 6;
        });
        break;
        case "Classic Range":
        holderBeers = beers.filter((beer) => {
            const yearBrewed = beer.first_brewed.split("/");
            return Number(yearBrewed[1]) < 2010;
        });
        break;
        case "Acidic":
        holderBeers = beers.filter((beer) => {
            return beer.ph < 4;
        });
        break;
        default:
        holderBeers = beers;
        break;
    }
}

it("should be rendered", () => {
    titlesArr.forEach((title) => {
        render(<Button title={title} handleFilterBeers={handleFilterBeersTest}/>)
        const componentP = screen.getByText(title);
        expect(componentP).toBeInTheDocument();
    })
})

it("should filter beers properly", () => {

    render(<Button title={titlesArr[0]} handleFilterBeers={handleFilterBeersTest}/>)
    let filterButton = screen.getByText(titlesArr[0]);
    userEvent.click(filterButton);
    expect(holderBeers).toEqual(beers);

    render(<Button title={titlesArr[1]} handleFilterBeers={handleFilterBeersTest}/>)
    filterButton = screen.getByText(titlesArr[1]);
    userEvent.click(filterButton);
    expect(holderBeers).toEqual((beers.filter((beer) => beer.abv>6)));

    render(<Button title={titlesArr[3]} handleFilterBeers={handleFilterBeersTest}/>)
    filterButton = screen.getByText(titlesArr[3]);
    userEvent.click(filterButton);
    expect(holderBeers).toEqual(beers.filter((beer) => beer.ph <4));
})