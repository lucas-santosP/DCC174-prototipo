import * as React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './componets/layout';
import { ResponderDuvida } from './pages/respoder-duvida';
import { AvaliarResposta } from './pages/avaliar-resposta';
import { NovaDuvida } from './pages/nova-duvida';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/nova-duvida" element={<NovaDuvida />} />
        <Route path="/responder-duvida" element={<ResponderDuvida />} />
        <Route path="/avaliar-resposta" element={<AvaliarResposta />} />
        <Route path="*" element={<Navigate to="/nova-duvida" replace />} />
      </Routes>
    </Layout>
  );
}
