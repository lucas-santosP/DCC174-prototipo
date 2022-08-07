import * as React from 'react';

export function ResponderDuvida() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Responder dúvida</h1>

      <div className="flex flex-col gap-6 border border-gray-300 rounded-md shadow-md p-4">
        <div className="flex flex-col">
          <label htmlFor="">Titulo</label>
          <input
            disabled
            type="text"
            className="border border-gray-400"
            value="Como tratar pulso deslocado ?"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descripion">Descrição</label>
          <textarea
            disabled
            id="descripion"
            rows={5}
            value="Atendi um paciente com pulso deslocado, prescrevi alguns analgésico para aliviar a dor mas como posso proceder alem disto ?"
            style={{ resize: 'none' }}
            className="border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descripion">Categoria</label>
          <select
            disabled
            id="category"
            value="2"
            className="border border-gray-400"
          >
            <option value="1">Cardiologia</option>
            <option value="2">Ortopedia</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Visibilidade</label>
          <div className="flex text-gray-700 items-center gap-2">
            <label>publico</label>
            <input
              defaultChecked
              disabled
              type="radio"
              name="visibility"
              className="mt-[1px] mr-8"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Nome do remetente</label>
          <input
            disabled
            type="text"
            className="border border-gray-400"
            value="Caio L. Souza"
          />
        </div>

        <hr />

        <div className="flex flex-col">
          <label htmlFor="Resposta">Resposta</label>
          <textarea
            id="Resposta"
            rows={5}
            style={{ resize: 'none' }}
            className="border border-gray-400"
          />
        </div>

        <div className="flex">
          <button className="text-white w-full font-medium bg-primary px-8 py-2 rounded">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
