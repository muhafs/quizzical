import "./App.css";
import topBlob from "./assets/top-blob.svg";
import botBlob from "./assets/bot-blob.svg";

function App() {
  return (
    <>
      <div className="bg-primary-bg relative flex h-[550px] w-[550px] items-center justify-center rounded-sm">
        <img className="absolute right-0 top-0" src={topBlob} alt="top blobs" />

        <div className="">
          <h2 className="text-primary text-center text-3xl font-bold">
            Quizzical
          </h2>
          <p className="text-primary font-inter mt-2 text-base">
            Press start to begin, Enjoy!
          </p>
          <button className="bg-secondary-bg text-primary-bg mt-8 w-[193px] rounded-2xl px-4 py-4">
            Start Quiz
          </button>
        </div>

        <img
          className="absolute bottom-0 left-0"
          src={botBlob}
          alt="bottom blobs"
        />
      </div>
    </>
  );
}

export default App;
