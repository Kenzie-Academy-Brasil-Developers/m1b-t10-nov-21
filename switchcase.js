/* regra de negocio para acesso de usuário

Definir os links de acesso para cada perfil de usuário

cliente: " Carrinho de compras | Perfil Usuário | Falar com Atendente"

secretaria: "Reserva sala Reunião | Agenda | Chat com cliente"
recepcao: "Reserva sala Reunião | Agenda | Chat com cliente"

estoque: "Estoque | Pedidos Pendentes | Rota de entregas"

vendedor: "Estoque | Vendas | Atendimento de Clientes | Enviar Propostas"

gerente: "Pedidos Pendentes | Cadastro de Funcionarios | Cadastrar Promoção"

diretor: "Relatório de Propostas | Relatórios Estoque | Relatórios Vendas"
*/

let tipoUsuario = "cliente";

switch (tipoUsuario) {
  case "cliente":
    console.log(
      tipoUsuario +
        " :" +
        " Carrinho de compras | Perfil Usuário | Falar com Atendente"
    );
    break;
  case "secretaria":
  case "recepcao":
    console.log(
      tipoUsuario + ": " + "Reserva sala Reunião | Agenda | Chat com cliente"
    );
    break;
  case "estoque":
    console.log(
      tipoUsuario + " :" + "Estoque | Pedidos Pendentes | Rota de entregas"
    );
    break;
  case "vendedor":
    console.log(
      tipoUsuario +
        " :" +
        "Estoque | Vendas | Atendimento de Clientes | Enviar Propostas"
    );
    break;
  case "gerente":
    console.log(
      ttipoUsuario +
        " :" +
        "Pedidos Pendentes | Cadastro de Funcionarios | Cadastrar Promoção"
    );
    break;
  case "diretor":
    console.log(
      tipoUsuario +
        " :" +
        "Relatório de Propostas | Relatórios Estoque | Relatórios Vendas"
    );
  default:
    console.log("O tipo de acesso: " + tipoUsuario + " Não foi reconhecido!!");
    break;
}
