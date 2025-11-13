import React from 'react';
import { RuleSectionType } from './types';

// Icons
const ClipboardDocumentListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C6.095 4.01 5.25 4.973 5.25 6.108V18.75c0 1.243.87 2.25 1.976 2.25H18A2.25 2.25 0 0020.25 18.75V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08" />
    </svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.05-4.337A9.75 9.75 0 014.5 9.75V7.5a3 3 0 013-3h9a3 3 0 013 3v2.25a9.75 9.75 0 01-2.05 5.663A9.75 9.75 0 0116.5 18.75zM9 4.5h6" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" />
    </svg>
);

const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a6.01 6.01 0 00-3.75 0M14.25 18v-.102a3.375 3.375 0 00-1.125-2.257 3.375 3.375 0 00-2.25-1.125H9.75a3.375 3.375 0 00-2.25 1.125 3.375 3.375 0 00-1.125 2.257V18m1.5-12.825a2.25 2.25 0 00-1.06-.518A2.25 2.25 0 007.5 7.5v.002a2.25 2.25 0 001.06.518c.43.165.892.29 1.38.368M16.5 5.175a2.25 2.25 0 00-1.06-.518A2.25 2.25 0 0012 7.5v.002a2.25 2.25 0 001.06.518c.43.165.892.29 1.38.368" />
    </svg>
);

const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const RULES_DATA: RuleSectionType[] = [
    {
        code: 'C1',
        title: 'Procedimentos da Competição',
        icon: <ClipboardDocumentListIcon />,
        rules: [
            'Participar de todas as reuniões obrigatórias — a ausência gera penalização.',
            'Conduta ética é indispensável: uso de álcool, drogas ou armas resulta em desclassificação imediata.',
            'Mantenha organização e limpeza na área dos boxes e respeito às áreas delimitadas da competição.',
            'Testes e movimentações do veículo só podem ocorrer nas áreas autorizadas.',
            'É possível protestar decisões da organização — apenas o capitão ou o orientador pode fazê-lo, seguindo o procedimento correto no fórum oficial.',
        ],
    },
    {
        code: 'C2',
        title: 'Pontuação',
        icon: <TrophyIcon />,
        rules: [
            'Total de 1000 pontos distribuídos entre: Avaliação de Projeto (320), Eventos Dinâmicos (280) e Enduro de Resistência (400).',
            'Penalizações podem reduzir a pontuação ou até causar desclassificação (DQ).',
            'Protestos improcedentes custam –25 pontos.',
        ],
    },
    {
        code: 'C3',
        title: 'Inspeção Técnica e de Segurança',
        icon: <ShieldCheckIcon />,
        rules: [
            'É dividida em Parte Estática (verificação de segurança e conformidade) e Parte Dinâmica (testes funcionais).',
            'O veículo só participa das provas após aprovação completa.',
            'Equipes com 4+ falhas (“rechecks”) ou atrasos entram em repescagem e perdem pontos.',
        ],
    },
    {
        code: 'C4',
        title: 'Avaliação de Projeto',
        icon: <LightBulbIcon />,
        rules: [
            'Engloba quatro provas: Relatórios Técnicos, Desafio Técnico, Apresentação e Negócios, e Avaliação de Projeto Dinâmico.',
            'O foco é qualidade do projeto, inovação, segurança e viabilidade.',
            'Penalizações incluem atrasos ou falhas de documentação.',
        ],
    },
    {
        code: 'C5',
        title: 'Eventos Dinâmicos',
        icon: <BoltIcon />,
        rules: [
            'Avaliam o desempenho do veículo em provas práticas: Aceleração, Velocidade Máxima, Frenagem, Tração, Suspensão, Manobrabilidade, Super Prime.',
            'Cada prova tem peso específico e segue regras claras de segurança e tempo.',
        ],
    },
    {
        code: 'C6',
        title: 'Enduro de Resistência',
        icon: <ClockIcon />,
        rules: [
            'É o evento final e o mais importante (400 pontos).',
            'Testa durabilidade, estratégia e desempenho contínuo do veículo.',
            'Penalizações severas para falhas de segurança, conduta ou abastecimento irregular.',
        ],
    },
];
