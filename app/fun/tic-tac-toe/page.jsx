import Tictactoe from "./ticTacToe";

export default function AboutMe() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between">
        <section className="d-block px-6 py-18 sm:py-12 lg:px-8">
          <Tictactoe />
        </section>
      </div>
    </div>
  );
}
