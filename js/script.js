document.addEventListener('DOMContentLoaded', () => {
  function loadTableData() {     
      setTimeout(() => {        
          const data = [
              { nome: "Nome 1", telefone: "(11) 99999-9999", ramal: "1234", setor: "TI" },
              { nome: "Nome 2", telefone: "(11) 98888-8888", ramal: "5678", setor: "RH" },
              { nome: "Nome 3", telefone: "(11) 97777-7777", ramal: "1122", setor: "Financeiro" },
              { nome: "Nome 4", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Nome 5", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Nome 6", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
              { nome: "Nome 7", telefone: "(11) 96666-6666", ramal: "3344", setor: "Vendas" },
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

function toggleSubmenu(event) {
    event.preventDefault(); // Previne a navegação do link

    var submenu = event.target.nextElementSibling;
    var isOpen = submenu.classList.contains("open");

    // Animar com GSAP
    if (isOpen) {
        gsap.to(submenu, { 
            duration: 0.5, 
            maxHeight: 0, 
            ease: "power2.out"
        });
        submenu.classList.remove("open");
    } else {
        submenu.classList.add("open");
        gsap.to(submenu, { 
            duration: 0.5, 
            maxHeight: 500, 
            ease: "power2.out" 
        });
    }
}