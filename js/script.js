document.addEventListener('DOMContentLoaded', () => {
  function loadTableData() {     
      setTimeout(() => {        
          const data = [
              { nome: "João Silva", telefone: "(11) 99999-9999", ramal: "1234", setor: "TI" },
              { nome: "Maria Souza", telefone: "(11) 98888-8888", ramal: "5678", setor: "RH" },
              { nome: "Carlos Oliveira", telefone: "(11) 97777-7777", ramal: "1122", setor: "Financeiro" },
              { nome: "Ana Lima", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Ana Lima", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Ana Lima", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Ana Lima", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
          ];

          document.getElementById('table-container').style.display = 'none';
          const tableBody = document.getElementById('table-body');
          data.forEach(item => {
              const row = document.createElement('tr');
              row.classList.add('border-b', 'hover:bg-gray-50', 'transition-colors');
              row.innerHTML = `
                  <td class="px-6 py-4">${item.nome}</td>
                  <td class="px-6 py-4">${item.telefone}</td>
                  <td class="px-6 py-4">${item.ramal}</td>
                  <td class="px-6 py-4">${item.setor}</td>
              `;
              tableBody.appendChild(row);
          });
      }, 2000);
  }

  loadTableData();
});