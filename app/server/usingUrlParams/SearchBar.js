"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation.js";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  },300);
  return (
    <input
      type="text"
      placeholder="Type here"
      className="bg-transparent border px-4 py-2 rounded-lg border-gray-500 text-sm "
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default SearchBar;
