export default function AgentCard({ agent }) {
  return (
    <li className="bg-gray-100 rounded-[12px] overflow-hidden">
      <img className="w-full h-[320px] object-cover" src={agent.image} alt="" />
      <div className="p-4 text-center">
        <p>이름 : {agent.name}</p>
        <p>나이 : {agent.age}</p>
        <p>부서 : {agent.field}</p>
      </div>
    </li>
  );
}
