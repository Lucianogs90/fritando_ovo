import { receitas } from "../../../../dados";

export default function Publicacoes(req, res) {
  return res.status(200).json(receitas);
}
