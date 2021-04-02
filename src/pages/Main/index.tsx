import React from 'react';

import BrightCard from '../../components/BrightCard';
import DarkerCard from '../../components/DarkerCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {MainPage} from './styles'

function Main() {
  return(
    <MainPage>
      <Header/>
      <DarkerCard title="centro de estudos de cultura da guiné."
      description="O Centro de Estudos de Cultura da Guiné, fundado em 2016, acolhe e aloja
       imigrantes e refugiados africanos em situação de vulnerabilidade, além de promover 
       atividades artísticas, culturais e pedagógicas, aulas de dança e percussão, saraus e 
       outros encontros temáticos." pix="CHAVE PIX: 236.491.728-01 (CPF)"
       financingCampaignLink="https://benfeitoria.com/centroculturaldaguine?ref=benfeitoria-pesquisa-projetos" financingCampaignName="CAMPANHA DE FINANCIAMENTO"
       instagram="https://www.instagram.com/centroculturaldaguine/" facebook="https://www.facebook.com/centrodeestudosdeculturaguine/"/>

      <BrightCard title="casa laudelina de campos melo."
      description="A Casa Laudelina de Campos Melo é uma ocupação organizada pelo Movimento 
      de Mulheres Olga Benário para denunciar o abandono do Estado à políticas públicas que 
      garantem vida das mulheres. Com objetivo de acolher mulheres em situação de violência 
      (muitas delas imigrantes) e organizar luta feminista, a Casa de Referência para Mulher 
      Laudelina de Campos Melo também promove diversos cursos para se autossustentar 
      financeiramente." pix="CHAVE PIX: 091.182.556-80 (CPF)"accountInformationBankName="CAIXA"
      accountInformationAgency="Agência: 1367"  accountInformationOperation="Operação: 013"
      accountInformationAccountNumber = "Conta Poupança no.: 00032381-1"
      accountInformationCPF = "CPF: 091.182.556-80" instagram="https://www.instagram.com/casalaudelinamelo/"/>

      <DarkerCard title="casa florescer."
      description="A Casa Florescer é um centro de acolhida pioneira no Brasil que acolhe e 
      atende 30 mulhereres transexuais e travestis. É administrada pela instituição Coordenação
       Regional das obras de Promoção Humana - CROPH em parceria com a Secretaria Municipal de 
       Assistencia e Desenvolvimento Social e Secretaria Municipal de Direitos Humanos." 
       financingCampaignLink="https://app.picpay.com/user/apoiecasaflorescer" financingCampaignName="pic pay"
       instagram="https://www.instagram.com/casaflorescer_/" facebook="https://www.facebook.com/casaflorescer" site="https://casaflorescer.netlify.app/"/>

      <BrightCard title="campanha: tem gente com fome."
      description="Para fazer a contingência da pior crise humanitária dos últimos tempos no 
      Brasil, a Coalizão Negra Por Direitos, em parceria com a Anistia Internacional, Oxfam 
      Brasil, Redes da Maré, Ação Brasileira de Combate às Desigualdades, 342 Artes, Nossas
      - Rede de Ativismo, Instituto Ethos, Orgânico Solidário e Grupo Prerrô, mobilizam suas 
      forças para lançar a campanha de financiamento coletivo para arrecadar fundos para ações 
      emergenciais de enfrentamento à fome, à miséria e à violência na pandemia de Covid-19." 
      pix="CHAVE PIX: 11.140.583/0001-72" financingCampaignLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FHMDCXR77TZD8&source=url" financingCampaignName="pay pal"
      accountInformationBankName="Associação Franciscana DDFP"
      accountInformationCNPJ="CNPJ: 11.140.583/0001-72" accountInformationAgency="agency: 1201-5" accountInformationAccountNumber="Conta Corrente: 73.963-4"
      site="https://www.temgentecomfome.com.br/"/>  

      <DarkerCard title="articulação dos povos indígenas no brasil."
      description="A APIB é responsável pela frente “Emergência Indígena”,  frente do movimento
      indígena no Brasil no enfrentamento da pandemia de COVID-19  e sua expansão sobre os 
      territórios e povos originários. A frente organiza planos, projetos e ações criados a 
      partir da necessidade de acompanhar e analisar o impacto do vírus sobre os povos indígenas,
      fornecer insumos e desenvolver estratégias de enfrentamento específicas e diferenciadas,
      além de resguardar a memória e conhecimento ameaçado pela morte dessa população." 
      financingCampaignLink="https://paybox.doare.org/br/paybox?sourceURL=https%2F%2Fapip.info&lang=br&values=30,70,150,300,500&currency=BRL&showIncludeCosts=1&orgId=7b997909-eb84-11ea-9b5e-060a6e179d39&campaignId=2b9824a6-ecc3-11ea-9b5e-060a6e179d39&subscribe=1&subscriptionAmount=&showSubscription=1&referer=https:%2F%2Fapib.info%2Fapib&urlLogo=emergencia.jpeg" financingCampaignName="EMERGENCIA INDÍGENA"
      extraFinancingCampaignLink="https://www.vakinha.com.br/vaquinha/apoie-os-povos-indigenas" extraFinancingCampaignName="VAKINHA APIB"
      instagram="https://www.instagram.com/apiboficial/" facebook="https://www.facebook.com/apiboficial" site="https://apiboficial.org/"/>

      <BrightCard title="casa chama." 
      description="A Casa Chama é uma associação cultural de cuidados LGBTQIA+ plural e fluida,
      que surgiu da necessidade de criar mais espaços de pesquisa, discussão e ação. É um 
      ambiente de convívio seguro que produz desde eventos culturais e grupos de estudo até
      projetos de cuidado e apoio jurídico." financingCampaignLink="https://www.vakinha.com.br/vaquinha/fundo-de-emergencia-para-pessoas-trans-1-3" 
      financingCampaignName="FUNDO EMERGENCIAL"
      accountInformationBankName="Banco do Brasil"
      accountInformationFantasyName="Nome fantasia: mauxcubio" accountInformationAgency="Agência: 6982-5" accountInformationAccountNumber="Conta: 17944-2"
      accountInformationCNPJ="CNPJ: 20.101.782/0001-62"
      instagram ="https://www.instagram.com/casachama_org/" facebook="https://www.facebook.com/casachama440"site="https://www.casachama.org/"/>  
      <Footer/>
    </MainPage>
  )
}

export default Main;