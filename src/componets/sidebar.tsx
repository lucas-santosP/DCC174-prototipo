import * as React from "react";

import { useNavigate } from "react-router-dom";

type IProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export function Sidebar({ open, setOpen }: IProps) {
  const openStyles = open ? "left-0 duration-300" : "left-[-100vw] duration-500";

  const navigate = useNavigate();

  function navigateTo(path: string) {
    setOpen(false);
    navigate(path);
  }

  return (
    <aside
      className={`absolute transition-all top-0 w-[175px] transform h-full flex flex-col bg-white shadow-xl border-r border-gray-200 pt-10 ${openStyles}`}
    >
      <ul className="list-disc flex flex-col w-full">
        <li
          onClick={() => navigateTo("/nova-duvida")}
          className="w-full px-2 hover:bg-gray-100 cursor-pointer py-2 border-t border-gray-300"
        >
          Nova dúvida
        </li>

        <li
          onClick={() => navigateTo("/responder-duvida")}
          className="w-full px-2 hover:bg-gray-100 cursor-pointer py-2 border-t border-gray-300"
        >
          Responder dúvida
        </li>

        <li
          onClick={() => navigateTo("/avaliar-resposta")}
          className="w-full px-2 hover:bg-gray-100 cursor-pointer py-2 border-t border-b border-gray-300"
        >
          Avaliar resposta
        </li>
      </ul>
    </aside>
  );
}
