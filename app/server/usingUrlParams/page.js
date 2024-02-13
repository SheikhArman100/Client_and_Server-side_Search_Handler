import UserCard from "@/components/UserCard.js";
import UserCardSkeleton from "@/components/UserCardSkeleton.js";
import { Suspense } from "react";
import SearchBar from "./SearchBar.js";

const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  return response.json();
};

const UsingUrlParams = async ({ searchParams }) => {
  const query = searchParams.query || "";
  const { users } = await fetchUsers();

  const filterData = users?.filter((user) => {
    const name = `${user.firstName} ${user.lastName}`;
    return name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className=" flex flex-col items-start gap-y-3">
      <h1 className="text-2xl font-bold">
        Server side search functionality using URL params
      </h1>
      {/* ------------------------search bar------------------------------------ */}

      <SearchBar />

      <section className="w-full h-full flex  justify-center ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10  ">
          {query.length === 0 ? (
            users.map((user, index) => (
              //------------------ user card---------------------------------
              <Suspense key={index} fallback={<UserCardSkeleton />}>
                <UserCard key={index} user={user} />
              </Suspense>
            ))
          ) : filterData.length === 0 ? (
            <p className="">No users found</p>
          ) : (
            filterData.map((user, index) => (
              //------------------ user card---------------------------------
              <Suspense key={index} fallback={<UserCardSkeleton />}>
                <UserCard key={index} user={user} />
              </Suspense>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default UsingUrlParams;
