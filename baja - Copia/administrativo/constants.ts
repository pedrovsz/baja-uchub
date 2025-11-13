// FIX: Rewrote JSX to React.createElement calls to be compatible with a .ts file extension.
// The TypeScript compiler only supports JSX in .tsx files. Since renaming the file is not possible,
// this change ensures the code is valid TypeScript.
import React from 'react';

interface AccordionData {
  title: string;
  content: React.ReactNode;
}

export const accordionData: AccordionData[] = [
  {
    title: '1. Aplicabilidade do Regulamento',
    content: React.createElement(
      'p',
      null,
      'As regras do Programa Baja SAE BRASIL se aplicam a todos os envolvidos: alunos, orientadores, instituições de ensino, voluntários, membros do comitê e equipe da SAE BRASIL. As definições técnicas e competitivas do Regulamento Administrativo e Técnico (RATBSB) também abrangem todos os participantes e competições organizadas pela SAE BRASIL.'
    ),
  },
  {
    title: '2. Histórico',
    content: React.createElement(
      'p',
      null,
      'As regras do Programa Baja SAE BRASIL se aplicam a todos os envolvidos: alunos, orientadores, instituições de ensino, voluntários, membros do comitê e equipe da SAE BRASIL. As definições técnicas e competitivas do Regulamento Administrativo e Técnico (RATBSB) também abrangem todos os participantes e competições organizadas pela SAE BRASIL.'
    ),
  },
  {
    title: '3. Definições',
    content: React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'p',
        null,
        'O Programa Baja SAE é um desafio estudantil que busca aplicar, na prática, os conhecimentos acadêmicos em um projeto real, preparando os alunos para o mercado de trabalho. No Brasil, recebe o nome de Baja SAE BRASIL.'
      ),
      React.createElement(
        'p',
        null,
        'Na competição, equipes de estudantes representam suas instituições de ensino em avaliações comparativas de projetos. No país, a competição nacional é chamada Competição Baja SAE BRASIL, e as regionais são denominadas Etapas Sul, Sudeste e Nordeste.'
      ),
      React.createElement(
        'p',
        null,
        'A administração do programa é feita pela SAE BRASIL, que cuida da organização, aspectos financeiros e gestão dos eventos. Questões técnicas ficam a cargo do Comitê Técnico, com apoio de voluntários descritos na Cartilha do Voluntário. Entre os voluntários estão os Juízes Credenciados de Segurança (JCS), responsáveis por avaliações técnicas de segurança em cada competição.'
      ),
      React.createElement(
        'p',
        null,
        'O regulamento oficial, chamado Regulamento Administrativo e Técnico Baja SAE BRASIL (RATBSB), é dividido em três partes: Administrativo, Técnico e de Competição. Ele é publicado no site oficial da SAE BRASIL e atualizado por meio de emendas. O site da SAE BRASIL disponibiliza as versões oficiais do RATBSB.'
      ),
      React.createElement(
        'p',
        null,
        'Já o Fórum Baja SAE BRASIL é o canal oficial de comunicação entre equipes e o Comitê, enquanto assuntos não técnicos devem ser tratados por e-mail com o staff da SAE BRASIL.'
      )
    ),
  },
  {
    title: '4. Competição Baja SAE BRASIL',
    content: React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'p',
        null,
        'A competição é um evento anual que reúne equipes de todo o país em uma disputa comparativa de projetos. Para participar, é obrigatório que as equipes leiam e cumpram integralmente o Regulamento Administrativo e Técnico Baja SAE BRASIL (RATBSB).'
      ),
      React.createElement(
        'p',
        null,
        'As equipes devem projetar e construir um veículo monoposto, fora-de-estrada e esportivo, confiável, ergonômico, econômico e robusto, capaz de bom desempenho em terrenos acidentados. O desenvolvimento deve ser feito integralmente pelos alunos, incluindo projeto, construção, testes, promoção e operação, sempre com respeito às regras e às prioridades acadêmicas da instituição de ensino.'
      ),
      React.createElement(
        'p',
        null,
        'A organização tem autoridade sobre a interpretação das regras e pode alterar o regulamento ou a programação do evento para garantir segurança e eficiência. O não cumprimento das regras pode gerar penalidades que vão de advertência até a exclusão definitiva da equipe.'
      ),
      React.createElement(
        'p',
        null,
        'Para ser elegível, cada participante deve: estar matriculado em curso de graduação ou pós-graduação; ser associado à SAE; ter idade mínima de 18 anos (ou autorização dos responsáveis); apresentar documento oficial com foto, seguro médico, contato de emergência e termo de responsabilidade; os pilotos devem possuir CNH válida.'
      ),
      React.createElement(
        'p',
        null,
        'Cada equipe deve ter um professor orientador designado pela instituição, que atua como representante oficial e apoio acadêmico, mas não pode participar diretamente da fabricação ou testes do veículo.'
      ),
      React.createElement(
        'p',
        null,
        'Os veículos são desenvolvidos integralmente pelos estudantes, podendo manter a mesma gaiola de proteção por até 2 anos, desde que cumpram os regulamentos atuais. Cada instituição pode inscrever até duas equipes, mas projetos devem ser originais, evitando duplicação entre veículos.'
      ),
      React.createElement(
        'p',
        null,
        'As inscrições devem seguir as instruções no site oficial da SAE BRASIL. As regras valem desde a chegada da equipe ao local do evento até sua saída. Condutas inapropriadas podem gerar punições definidas pelo Comitê, sem direito a recurso.'
      ),
      React.createElement(
        'p',
        null,
        'O RATBSB é válido apenas para as competições organizadas pela SAE BRASIL. Equipes que participarem de competições internacionais devem seguir o regulamento da SAE International.'
      ),
      React.createElement(
        'p',
        null,
        'Dúvidas e questionamentos sobre o regulamento devem ser postados no Fórum Baja SAE BRASIL, devidamente identificados. Propostas de alteração do RATBSB podem ser enviadas por formulário oficial, também disponível no fórum.'
      )
    ),
  },
];
