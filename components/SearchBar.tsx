"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { hostname } from "os";
import React, { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    if (
      hostname.includes("amazon.in") ||
      hostname.includes("amazon.com") ||
      hostname.endsWith("amazon.com") ||
      hostname.includes("flipkart.com")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

function SearchBar() {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    // alert(isValidLink ? "Valid link" : "Invalid link");

    if (isValidLink === false)
      return alert("Please enter a valid product link");

    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className=" flex flex-wrap gap-4 mt-12" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        className="searchbar-btn"
        type="submit"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
