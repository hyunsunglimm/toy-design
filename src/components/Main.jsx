import { agents } from "../data/agents";
import AgentCard from "./AgentCard";
import time from "/time.jpeg";
import graph from "/graph.jpeg";

export default function Main() {
  return (
    <main className="bg-black-500 flex-1 p-8 ml-[300px]">
      <div className="flex gap-8 h-[500px] mb-6">
        <div className="bg-white flex-1 rounded-lg p-8">
          <p>근무중인 직원</p>
          <ul className="grid grid-cols-3 gap-3">
            {agents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} />
            ))}
          </ul>
        </div>
        <div className="bg-white w-[300px] rounded-lg p-8">
          <p>시간 정보</p>
          <img src={time} alt="" />
          <p className="text-center text-[32px] font-bold mb-8">16 : 08</p>
          <p className="bg-gray-100 p-4 rounded-md">
            다음 근무까지 18시간 52분 남았습니다.
          </p>
        </div>
      </div>
      <div className="flex gap-8 h-[500px]">
        <div className="flex-1 rounded-lg p-8">
          <p className="text-gray-400">직원 검색</p>
          <div className="flex gap-4">
            <select className="w-full p-2 rounded-lg">
              <option hidden>부서</option>
              <option>개발</option>
              <option>디자인</option>
              <option>기획</option>
            </select>
            <select className="w-full p-2 rounded-lg">
              <option hidden>현재 근무중</option>
              <option>yes</option>
              <option>no</option>
            </select>
            <input className="w-full p-2 rounded-lg" />
            <button className="bg-blue-400 text-white p-2 rounded-lg">
              Search
            </button>
          </div>
          <ul className="mt-12 flex flex-col gap-4">
            {agents.map((agent) => (
              <li
                className="flex justify-between border-b-[1px] border-gray-200 p-2"
                key={agent.name}
              >
                <p>이름 : {agent.name}</p>
                <p>나이 : {agent.age}</p>
                <p>부서 : {agent.field}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white w-[300px] rounded-lg p-8">
          <p className="mb-8">근무시간 그래프</p>
          <div className="overflow-hidden rounded-[12px]">
            <img src={graph} />
          </div>
          <div className="flex flex-col mt-4 bg-gray-100 p-4 rounded-md text-[15px]">
            <p>John님은 근무시간이 부족합니다.</p>
            <p>Emma님은 근무시간이 부족합니다.</p>
            <p>Liam님은 근무시간을 4시간 8분 초과하였습니다.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
