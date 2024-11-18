document.getElementById('curriculoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário padrão
  
    // Coletando os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const profissao = document.getElementById('profissao').value;
    const objetivo = document.getElementById('objetivo').value;
    const experiencias = document.getElementById('experiencias').value;
    const cursos = document.getElementById('cursos').value;
  
    // Formatando os dados
    const dadosHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Endereço:</strong> ${endereco}</p>
      <p><strong>Profissão:</strong> ${profissao}</p>
      <p><strong>Objetivo Profissional:</strong> ${objetivo}</p>
      <p><strong>Experiências:</strong><br>${experiencias.replace(/\n/g, '<br>')}</p>
      <p><strong>Cursos:</strong><br>${cursos.replace(/\n/g, '<br>')}</p>
    `;
  
    // Exibindo os dados
    document.getElementById('dados').innerHTML = dadosHTML;
    document.getElementById('curriculoForm').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
  });
  