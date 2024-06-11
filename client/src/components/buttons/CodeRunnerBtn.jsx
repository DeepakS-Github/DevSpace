import React from 'react'
import { VscRunAll } from "react-icons/vsc";

const CodeRunnerBtn = () => {
  return (
    <div className="h-[6vh] bg-[#181818] grid place-items-center">
    <button className="bg-green-700 py-1 rounded px-4 text-slate-100 text-sm flex flex-row gap-1 justify-center items-center">
      <VscRunAll />
      <span>Run</span>
    </button>
  </div>
  )
}

export default CodeRunnerBtn