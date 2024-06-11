import CodeRunnerBtn from "./components/buttons/CodeRunnerBtn";
import CodeEditor from "./components/code-editor/CodeEditor";
import LanguageBar from "./components/language-bar/LanguageBar";
import Shell from "./components/shell/Shell";


const App = () => {
  return (
    <div className="flex flex-row w-screen h-screen ">
      <div className="h-full w-[4%] bg-[#181818]">
        <div className="h-[6vh] grid place-items-center p-1">
          <img src="/download.jpeg" className="rounded-full overflow-hidden object-cover h-full aspect-square bg-green-800"/>
        </div>
        <LanguageBar />
      </div>
      <div className="w-[56%] h-full">
        <CodeRunnerBtn />
        <CodeEditor />
        <div className="h-[2vh] w-full bg-[#181818]">

        </div>
      </div>
      <div className="w-[40%] h-full">
        <Shell />
      </div>
    </div>
  );
};

export default App;
