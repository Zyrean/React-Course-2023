import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <CreateUser />
      <CreateUser />
    </div>
  );
}

export default Home;
