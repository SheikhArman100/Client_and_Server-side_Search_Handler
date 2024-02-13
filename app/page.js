import SearchContainer from "../components/SearchContainer";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <h2 className="text-2xl font-bold">
        Search functionality in Client side and Server side 
      </h2>
      <p className="text-xs text-gray-400 mt-1">
        All the components of Next.js is default Server Side component.We can
        use search component both as server-side and client-side.It depends on
        our project
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SearchContainer
          type="Client"
          title="Client side with useState()"
          destination="/client/usingUseState"
        />

        <SearchContainer
          type="Server"
          title="Server side with URL Params"
          destination="/server/usingUrlParams"
        />
      </div>
    </div>
  );
}
