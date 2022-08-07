import * as React from 'react';

export function NovaDuvida() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Nova dúvida</h1>

      <div className="flex flex-col gap-6 border border-gray-300 rounded-md shadow-md p-4">
        <div className="flex flex-col">
          <label htmlFor="">Titulo</label>
          <input type="text" className="border border-gray-400" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descripion">Descrição</label>
          <textarea
            id="descripion"
            rows={5}
            style={{ resize: 'none' }}
            className="border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descripion">Categoria</label>
          <select
            id="category"
            defaultValue=""
            className="border border-gray-400"
          >
            <option value="" disabled>
              Selecione...
            </option>
            <option value="Anestesiologia">Anestesiologia</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Cirurgia geral">Cirurgia geral</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Ortopedia">Ortopedia</option>
            <option value="Neurologia">Neurologia</option>
            <option value="Pediatria">Pediatria</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Visibilidade</label>
          <div className="flex flex-wrap text-gray-700 items-center">
            <div className="flex gap-2 items-center">
              <label>publico</label>
              <input type="radio" name="visibility" className="mt-[1px] mr-8" />
            </div>

            <div className="flex gap-2 items-center">
              <label>privado</label>
              <input type="radio" name="visibility" className="mt-[1px]" />
            </div>
          </div>
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
