import SearchBox from "./SearchBox";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import beers from "../../data/beers";

let searchTerm = "", holderBeers;
const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput)
    searchTerm = cleanInput;
}

console.log(searchTerm)
holderBeers = beers.filter((beer) => {
    const beerLower = beer.name.toLowerCase();
    return beerLower.includes(searchTerm)
});

it("should render the input box", () => {
    render(<SearchBox label="search" searchTerm={searchTerm} handleInput={handleInput}/>);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
})

it("should render the value in the search box", () => {
    render(<SearchBox label="search" searchTerm="Hello" handleInput={handleInput}/>);
    const input = screen.getByDisplayValue("Hello");
    expect(input).toBeInTheDocument();
})

// it("should properly filter the beers base on search term", () => {
//     render(<SearchBox label="search" searchTerm={searchTerm} handleInput={handleInput}/>);
//     const input = screen.getByRole("textbox");
//     const typedMessage = "pilsen";
//     userEvent.type(input, typedMessage);
//     console.log(searchTerm)
//     let tempbeers = beers.filter((beer) => {
//         const beerLower = beer.name.toLowerCase();
//         return beerLower.includes(searchTerm)
//     });
//     console.log(tempbeers)
//     expect(holderBeers).toEqual(beers.filter((beer) => {
//         const beerLower = beer.name.toLowerCase();
//         return beerLower.includes(searchTerm)
//     }));
// })