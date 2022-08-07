import * as React from 'react';

export function AvaliarResposta() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Avaliar resposta</h1>

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
          <label htmlFor="descripion">Descrição</label>
          <input
            disabled
            id="descripion"
            type="text"
            className="border border-gray-400"
            value="Ortopedia"
          />
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
            disabled
            rows={5}
            style={{ resize: 'none' }}
            className="border border-gray-400"
            value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni at possimus rerum sunt fugit recusandae necessitatibus tenetur voluptates modi totam sint soluta inventore illum minus error ipsam, similique tempore! Odit!"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Nome do emissor</label>
          <input
            disabled
            type="text"
            className="border border-gray-400"
            value="João Pedro Carvalho"
          />
        </div>

        <hr />

        <div className="flex flex-col">
          <label htmlFor="Observações">Observações</label>
          <textarea
            id="Observações"
            rows={5}
            style={{ resize: 'none' }}
            className="border border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button className="text-white font-medium bg-primary hover:bg-primary/80 transition-all px-8 py-2 rounded">
            Aprovar
          </button>
          <button className="text-white font-medium bg-[#9C9C9C] hover:bg-[#9C9C9C]/80 transition-all px-8 py-2 rounded">
            Solicitar correção
          </button>
        </div>
      </div>
    </div>
  );
}
