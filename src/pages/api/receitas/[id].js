import { receitas } from "../../../../dados";

export default function PublicacoesId(req, res) {
  const { id } = req.query;
  const publicacaoFiltrada = receitas.find((p) => p.id == id);
  
  return res.status(200).json(publicacaoFiltrada);
}
