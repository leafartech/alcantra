import Header from "@/components/header";
import Section from "@/components/section";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Section classNameS="py-12 sm:py-24 relative sm:min-h-screen px-4">
          <img src="/images/bg2.png" className="absolute top-0 left-0 h-full w-full object-cover" />
          <div className="flex justify-start w-full">
            <div className="z-50 w-full max-w-3xl flex flex-col items-start gap-4">
              <h1 className="text-5xl font-bold text-[#2C3E50]"><span className="text-[#233DFF]">Impulsione</span> o seu nome ou sua marca com assessoria, execução e boa companhia</h1>
              <p className="text-2xl text-[#2C3E50]">Nosso Objetivo: Criar conexões duradouras entre marcas e pessoas, através de estratégias digitais que geram resultado e impacto.</p>
              <a href="https://api.whatsapp.com/send?phone=554799261012" className="text-[#2C3E50] border-2 rounded-xl font-semibold text-xl border-[#2C3E50] py-4 px-12">COMECE AGORA</a>
            </div>
          </div>
        </Section>
        <div>
          <img src="/images/bg3.png" className="w-full" />
        </div>
        <Section classNameS="relative py-12 px-4">
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-[#2C3E50] relative ps-6">
              <img src="/images/pol.png" className="absolute top-0 left-0 w-5 h-5" />
              Para quem? Para marcas audaciosas, empreendedores visionários e todos que acreditam que a verdadeira magia acontece fora da zona de conforto.
            </p>
            <p className="text-2xl text-[#2C3E50] relative ps-6">
              <img src="/images/pol.png" className="absolute top-0 left-0 w-5 h-5" />
              O que fazemos? Unimos criatividade, estratégia e inovação para elevar marcas e pessoas. Da concepção à execução, transformamos ideias em experiências memoráveis.
            </p>
            <p className="text-2xl text-[#2C3E50] relative ps-6">
              <img src="/images/pol.png" className="absolute top-0 left-0 w-5 h-5" />
              Por que nos escolher? Acreditamos na força da narrativa e no poder dos detalhes. Escolhemos atender a poucas contas para dar muita atenção a cada projeto e cada projeto é uma nova jornada onde a sua visão se torna a nossa missão.
            </p>
          </div>
        </Section>
        <Section classNameS="relative pt-12 px-4">
          <img src="/images/bg9.png" className="w-72 absolute right-0 sm:block hidden" />
          <div className="sm:grid sm:grid-cols-2 w-full">
            <div className="flex flex-col items-start gap-12">
              <div className="flex flex-col items-center">
                <img src="/images/logo2.png" className="w-72" />
                <p className="rounded-full py-2 px-4 text-black bg-white text-2xl serif ">Alcântra <span className="text-red-500">Rockets</span> Base</p>
              </div>
              <div className="">
                <h3 className="text-[#233DFF] text-4xl font-semibold">Nossos Valores</h3>
                <ul className="text-2xl text-[#2C3E50]">
                  <li>Autenticidade - Ser verdadeiro é o nosso lema.</li>
                  <li>Inovação - Pioneirismo em cada pixel e palavra.</li>
                  <li>Colaboração - Comprometimento e boa companhia.</li>
                  <li>Excelência - Qualidade não negociável.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="relative py-12 sm:py-24 px-4">
          <img src="/images/bg10.png" className="w-72 absolute left-0 sm:block hidden" />
          <div className="sm:grid sm:grid-cols-2 w-full">
            <div className=""></div>
            <div className="">
              <h3 className="text-[#233DFF] text-4xl font-semibold">A solução para você:</h3>
              <ul className="text-2xl text-[#2C3E50] flex flex-col gap-6">
                <li><strong>_Organização do tempo / Dinheiro</strong>: Toda campanha demonstrará o seu potencial com 10 ou com 1.000 reais. Trabalhamos com a construção de orçamento de investimento. Os valores e tempo investido serão sempre gradativos conforme os resultados. O nome disso é escalabilidade.</li>
                <li><strong>_Público / Produto</strong>: Analisamos todos os dados de forma minuciosa buscando o melhor entendimento e alinhamento do produto - público - procura. O Brasil é um país imenso, com regionalidade e oportunidades distintas. Construimos campanhas com estratégia e comunicação assertiva.</li>
                <li><strong>_Canais de comunicação</strong>: Assim como a região, cada pessoa tem a sua individualidade, bem como também, cada canal de comunicação a sua peculiaridade. Após algumas conversas iremos sugerir os melhores canais de comunicação de acordo com o seu interesse e personalidade, de forma a potencializar a sua visibilidade. Maior visibilidade, menor CAC.</li>
                <li><strong>_Entendimento / Demonstração de Resultados</strong>: Ter o resultado esperado é obrigação. Nós temos o compromisso de elevar o seu nível de entendimento do tempo e dinheiro investido de forma a motivar as ações coordenadas.</li>
              </ul>
            </div>
          </div>
        </Section>
        <div>
          <img src="/images/bg4.png" className="w-full" />
        </div>
        <Section classNameS="pb-24 pt-12 sm:py-24 px-4">
          <div className="flex sm:flex-row flex-col gap-6 sm:gap-12">
            <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-xs">
              <div className="border-2 p-2 h-24 flex items-center justify-center border-[#233DFF]">
                <h6 className="text-2xl xl:text-3xl font-medium text-[#2C3E50] text-center">Posicionamento digital</h6>
              </div>
              <p className="text-[#2C3E50] text-left text-lg">Em 3 formatos conforme a sua necessidade: Assessoria, Consultoria ou mentoria</p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-xs text-center">
              <div className="border-2 p-2 h-24 flex items-center justify-center border-[#233DFF]">
                <h6 className="text-2xl xl:text-3xl font-medium text-[#2C3E50] text-center">Desenvolver produto digital</h6>
              </div>
              <p className="text-[#2C3E50] text-left text-lg">Já construi a sua autoridade, mas não sabe o que vender para sua audiência? Nós te ajudamos a passar essa fase</p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-xs text-center">
              <div className="border-2 p-2 h-24 flex items-center justify-center border-[#233DFF]">
                <h6 className="text-2xl xl:text-3xl font-medium text-[#2C3E50] text-center">Digital skills</h6>
              </div>
              <p className="text-[#2C3E50] text-left text-lg">Em 3 formatos conforme a sua necessidade: Assessoria, Consultoria ou mentoria</p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-xs">
              <div className="border-2 p-2 h-24 flex items-center justify-center border-[#233DFF]">
                <h6 className="text-2xl xl:text-3xl font-medium text-[#2C3E50] text-center">Escala em vendas</h6>
              </div>
              <p className="text-[#2C3E50] text-left text-lg">Infoprodutos, ecommerce, site de vendas, canais de comunicação, redes sociais</p>
            </div>
          </div>
        </Section>
        <Section classNameS="relative pt-32 sm:pt-0 py-24 min-h-screen px-4">
          <img src="/images/bg6.png" className="absolute -top-24 right-0 h-48 sm:max-h-96" />
          <div className="w-full flex justify-start">
            <div className="max-w-4xl flex flex-col items-center text-center gap-12">
              <h4 className="serif text-[#2C3E50] text-4xl">Estamos muito felizes com a possibilidade de trabalharmos juntos e desde já queremos agradecer pelo seu tempo.</h4>
              <a href="https://api.whatsapp.com/send?phone=554799261012" className="text-[#2C3E50] border-2 rounded-xl text-xl border-[#2C3E50] py-4 px-12">VAMOS CONVERSAR??</a>
              <div className="relative flex flex-col items-center">
                <img src="/images/dardo.png" alt="" className="w-72 absolute -bottom-20" />
                <p className="rounded-full py-2 px-4 text-black bg-white text-2xl serif ">Alcântra <span className="text-red-500">Rockets</span> Base</p>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="pb-24 px-4">
          <div className="flex flex-col items-center gap-12">
            <h4 className="serif text-[#2C3E50] text-4xl font-semibold">Serviços Ofertados</h4>
            <div className="sm:grid sm:grid-cols-2 flex flex-col gap-0 sm:gap-12">
              <div className="">
                <p className="text-lg">_Criação, análise e acompanhamento de públicos Meta Business.</p>
                <p className="text-lg">_Criação, análise e acompanhamento de públicos Meta Business, Google Ads e YouTube.</p>
                <p className="text-lg">_Desenvolvimento, gestão e acompanhamento de campanhas Meta Business, Google Ads e YouTube.</p>
                <p className="text-lg">_SOCIAL MÍDIA.</p>
                <p className="text-lg">_Orientação estratégica de marketing e negócios.</p>
                <p className="text-lg">_Planejamento de conteúdo.</p>
                <p className="text-lg">_Artes Padronizadas.</p>
                <p className="text-lg">_Landing Pages Padrão.</p>
                <p className="text-lg">_Landing Page Captação Meta Business</p>
                <p className="text-lg">_Elaboração de Funil de Conteúdo e Vendas.</p>
                <p className="text-lg">_Scripts de Venda e recepção de mensagens.</p>
                <p className="text-lg">_Treinamento de posicionamento digital.</p>
                <p className="text-lg">_Treinamento de recepção de mensagens e cadência.</p>
                <p className="text-lg">_Orientação de conteúdo Reels.</p>
                <p className="text-lg">_Atendimento via WhatsApp.</p>
              </div>
              <div className="">
                <p className="text-lg">_Múltiplas campanhas de captação de leads.</p>
                <p className="text-lg">_Roteirização de vídeos e conteúdo.</p>
                <p className="text-lg">_Elaboração de campanhas físicas, outdoor e indoor.</p>
                <p className="text-lg">_DESIGNER gráfico, criação de postagens e artes.</p>
                <p className="text-lg">_Condução de equipe de filmagens, edição de vídeos e conteúdo.</p>
                <p className="text-lg">_Construção / melhoramento CAC x LTV.</p>
                <p className="text-lg">_Mentoria posicionamento digital, speakers, digital influencer.</p>
                <p className="text-lg">_Acompanhamento processo de venda, criação de campanhas de disparo WhatsApp, retenção de clientes e aumento LTV.</p>
                <p className="text-lg">_Disparos em massa WhatsApp.</p>
                <p className="text-lg">_Funil WhatsApp.</p>
              </div>
            </div>
            <div className="flex flex-col items-center  gap-2">
              <p className="text-[#2C3E50] font-semibold text-lg">NÃO TRABALHAMOS COM CONTRATO TEMPORAL, AFINAL, SE ESTIVER BOM, A GENTE VAI FICAR!</p>
              <p className="text-[#2C3E50] italic">Em caso de necessidade de cancelamento pede-se apenas o aviso com 30 dias de antecedência, com pagamento dessa última parcela, sem multa.</p>
              <div className="relative flex flex-col items-center">
                <img src="/images/dardo.png" alt="" className="w-72 absolute -bottom-20" />
                <p className="rounded-full py-2 px-4 text-black bg-white text-2xl serif ">Alcântra <span className="text-red-500">Rockets</span> Base</p>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="pb-12 sm:pb-24 px-4">
          <div className="sm:grid sm:grid-cols-2 flex flex-col w-full sm:gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#2C3E50] text-3xl">Por que já deu certo?</h4>
              <h3 className="text-[#233DFF] font-bold text-3xl">OS 4 ELEMENTOS DO PODER!</h3>
              <p className="text-[#2C3E50] text-lg"><strong>VONTADE</strong>. A vontade é superior ao preparo, a técnica e até a habilidade. O mundo acontece pelo movimento, mas é impactado pelas pessoas mais cheias de vontade.</p>
              <p className="text-[#2C3E50] text-lg"><strong>ENTENDIMENTO</strong>. É o potencializador da vontade!</p>
            </div>
            <div className="pt-4 sm:pt-12 flex flex-col gap-4">
              <p className="text-[#2C3E50] text-lg"><strong>EXECUÇÃO</strong>. É a testemunha ocular da vontade, aliado fiel da</p>
              <p className="text-[#2C3E50] text-lg"><strong>CONSTÂNCIA</strong>. A autoridade é construída pela repetição, realizada com vontade, entendimento e um propósito claro.</p>
            </div>
          </div>
        </Section>
        <div>
          <img src="/images/bg7.png" className="w-full" />
        </div>
        <Section classNameS="py-12 sm:py-24 px-4">
          <div className="flex flex-col gap-8 text-center">
            <h4 className="serif text-[#2C3E50] text-4xl font-semibold">Sua marca merece ser vista e lembrada</h4>
            <div className="flex sm:flex-row flex-col gap-6 items-center">
              <img src="/images/bg8.png" className="h-96" />
              <div className="flex flex-col items-start gap-4">
                <img src="/images/wpp.png" className="w-60" />
                <a href="https://api.whatsapp.com/send?phone=554799261012" className="text-[#233DFF] border-2 rounded-xl font-semibold text-xl border-[#2C3E50] py-4 px-12">COMECE AGORA</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="text-center flex items-center flex-col px-4 pb-8">
        <p>Av Carlos Drummond de Anfrade, 436 - Praia dos Amores - Balneário Camboriú - SC</p>
        <p>CNPJ 42.461.847/0001-13</p>
        <div className="relative flex flex-col items-center">
          <img src="/images/dardo.png" className="w-72 absolute -bottom-20" />
          <p className="rounded-full py-2 px-4 text-black bg-white text-2xl serif ">Alcântra <span className="text-red-500">Rockets</span> Base</p>
        </div>
      </footer>
    </div>
  )
}