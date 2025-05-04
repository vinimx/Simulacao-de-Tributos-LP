# Simulação de Tributos

## Sobre o Projeto

Este projeto foi desenvolvido como parte dos meus estudos de programação, mas com um foco prático em resolver problemas reais enfrentados no meu trabalho atual em um escritório de contabilidade na área fiscal.

O objetivo principal é automatizar e simplificar o cálculo de impostos para diferentes operações, especialmente para lojas de veículos no regime de Lucro Presumido, tornando o processo mais eficiente e reduzindo a possibilidade de erros.

## Funcionalidades

- **Cálculo de Impostos para Vendas**:
  - ICMS (1,800%)
  - PIS (0,65%)
  - COFINS (3%)
  - IRPJ (4,8%)
  - CSLL (2,88%)

- **Cálculo de Impostos para Serviços**:
  - ISSQN (varia por cidade)
  - PIS (0,65%)
  - COFINS (3%)
  - IRPJ (4,8%)
  - CSLL (2,88%)

- **Cálculo de Lucro**:
  - Lucro Bruto
  - Lucro Líquido (após impostos)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons

## Estrutura do Projeto

```
├── index.html          # Página principal
├── styles/             # Arquivos CSS
│   ├── variables.css   # Variáveis de estilo
│   ├── main.css        # Estilos principais
│   ├── header.css      # Estilos do cabeçalho
│   ├── footer.css      # Estilos do rodapé
│   └── menu.css        # Estilos do menu
├── js/                 # Arquivos JavaScript
│   ├── main.js         # Script principal
│   ├── formatarMoeda.js # Funções de formatação
│   ├── impostoVenda.js # Cálculos de impostos para vendas
│   └── impostoServiços.js # Cálculos de impostos para serviços
└── img/                # Imagens
```

## Contexto Profissional

Este projeto nasceu da necessidade de otimizar o trabalho na área fiscal do escritório de contabilidade onde atuo. O cálculo manual de impostos para diferentes operações pode ser demorado e propenso a erros, especialmente quando se lida com múltiplas alíquotas e bases de cálculo diferentes.

Ao desenvolver esta ferramenta, busquei:
1. Automatizar cálculos repetitivos
2. Reduzir o tempo gasto em operações manuais
3. Minimizar erros de cálculo
4. Facilitar a visualização dos resultados
5. Criar uma interface intuitiva para usuários não técnicos

## Aprendizados

Este projeto me permitiu aplicar conhecimentos de programação em um contexto real, enfrentando desafios como:
- Formatação de valores monetários
- Cálculos precisos de impostos
- Interface responsiva
- Organização de código modular
- Integração de diferentes tecnologias

## Próximos Passos

- Adicionar mais cidades para o cálculo de ISSQN
- Implementar funcionalidade de exportação de resultados
- Adicionar opção para salvar cálculos anteriores
- Expandir para outros tipos de operações fiscais

## Autor

Desenvolvido por Marcos Vinícius Marcolino Rocha - [@vinimx](https://github.com/vinimx)

---

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

*Este projeto foi desenvolvido para fins educacionais e profissionais, com o objetivo de resolver problemas reais enfrentados no ambiente de trabalho.* 
