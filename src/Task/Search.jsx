import { useState } from "react";
function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); 
    }

    return ( 
        <>
        {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                    placeholder="Search Task"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button
                    class="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Search Box Ends --> */}
        </>
     );
}

export default Search;