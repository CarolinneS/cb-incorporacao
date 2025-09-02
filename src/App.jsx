import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Shield,
  MapPin,
  Users,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent } from "./components/ui/card";
import "./App.css";

// Importando as imagens
const heroImage = "/hero.jpg";
const projectImage = "/project.jpg";
const luxuryImage = "/luxury.jpg";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoInvestimento: "",
  });

  // Scroll spy para menu ativo
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "quem-somos",
        "o-que-fazemos",
        "diferenciais",
        "por-que-investir",
        "depoimentos",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Dados do formulário:", formData);
    alert("Obrigado pelo seu interesse! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", tipoInvestimento: "" });
  };

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "quem-somos", label: "Quem Somos" },
    { id: "o-que-fazemos", label: "O Que Fazemos" },
    { id: "diferenciais", label: "Diferenciais" },
    { id: "por-que-investir", label: "Por que Investir?" },
    { id: "contato", label: "Contato" },
  ];

  const diferenciais = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Foco total no investidor",
      description: "Nosso compromisso é com o sucesso do seu investimento",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Alto potencial de retorno",
      description: "Modelos de negócio com baixo risco e alta rentabilidade",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Transparência total",
      description: "Comunicação clara e prestação de contas em todas as etapas",
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent" />,
      title: "Arquitetura inteligente",
      description:
        "Projetos pensados para o público certo e máxima valorização",
    },
  ];

  const beneficios = [
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "Retorno atrativo",
      description:
        "Nossos projetos são pensados para oferecer lucros consistentes",
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Segurança jurídica",
      description:
        "Estruturação legal completa e compliance em todas as etapas",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Localização estratégica",
      description: "Selecionamos áreas com alto potencial de valorização",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Parceria real",
      description: "Atuamos ao lado do investidor, de forma clara e direta",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Menu Flutuante */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-primary mr-2" />
              <span className="text-xl font-bold text-primary">
                CB Incorporação
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary"
              >
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transformando oportunidades em{" "}
            <span className="text-accent">grandes negócios</span> imobiliários
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 text-gray-200"
          >
            Conectamos investidores a empreendimentos com alto potencial de
            valorização
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3"
              onClick={() => scrollToSection("contato")}
            >
              Seja um investidor CB
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              onClick={() => scrollToSection("quem-somos")}
            >
              Saiba mais
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown
            className="w-8 h-8 text-white animate-bounce cursor-pointer"
            onClick={() => scrollToSection("quem-somos")}
          />
        </motion.div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Quem Somos
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A CB Incorporação Imobiliária nasce com o propósito de
                desenvolver projetos sólidos, rentáveis e de alto valor
                agregado, conectando investidores a empreendimentos com grande
                potencial de valorização.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Atuamos com foco em transparência, segurança jurídica e retorno
                financeiro, oferecendo uma experiência profissional desde a
                concepção até a entrega final de cada projeto.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-700">
                  Primeiro empreendimento em construção
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={projectImage}
                alt="Empreendimento CB"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section id="o-que-fazemos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              O Que Fazemos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Somos uma incorporadora especializada em identificar terrenos
              estratégicos, desenvolver empreendimentos imobiliários inovadores
              e entregar oportunidades reais de investimento com alto potencial
              de retorno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Identificamos",
                description: "Áreas com potencial de valorização",
              },
              {
                step: "02",
                title: "Estruturamos",
                description:
                  "O empreendimento do ponto de vista legal, urbanístico e comercial",
              },
              {
                step: "03",
                title: "Apresentamos",
                description:
                  "O projeto a investidores que buscam rentabilidade com segurança",
              },
              {
                step: "04",
                title: "Entregamos",
                description:
                  "O projeto com gestão eficiente e foco na valorização",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-accent/10 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Investimento a partir de
              </h3>
              <div className="text-4xl font-bold text-accent mb-2">
                R$ 20.000
              </div>
              <p className="text-gray-700">
                Sistema de cotas para democratizar o acesso a grandes
                oportunidades
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Nosso Diferencial
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de incorporação imobiliária
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que investir */}
      <section id="por-que-investir" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={luxuryImage}
                alt="Empreendimento de luxo"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                Por que investir com a CB?
              </h2>

              <div className="space-y-6">
                {beneficios.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => scrollToSection("contato")}
                >
                  Quero investir agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      {/* Contato */}
      <section id="contato" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Quer saber como investir? Preencha o formulário e receba uma
              proposta personalizada
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Fale Conosco</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-200">(98) 98101-2244</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-200">(98) 98101-2244</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-gray-200">contato@cb18.site</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-gray-200">São Luís – MA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-gray-200">@cbincorporacao</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Solicite uma Proposta
                  </h3>

                  <form
                    action="https://formsubmit.co/contato@cb18.site"
                    method="POST"
                    className="space-y-4 max-w-lg mx-auto"
                  >
                    {/* Configurações do FormSubmit */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="Contato via site - CB Incorporação"
                    />
                    <input type="hidden" name="_template" value="table" />
                    {/* <input type="hidden" name="_next" value="https://SEU-DOMINIO/obrigado" /> */}

                    {/* Campos */}
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu telefone"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />

                    <select
                      name="tipoInvestimento"
                      required
                      defaultValue=""
                      className="w-full p-3 border border-gray-300 rounded-md"
                    >
                      <option value="" disabled>
                        Tipo de investimento desejado
                      </option>
                      <option value="cota-20k">Cota de R$ 20.000</option>
                      <option value="cota-50k">Cota de R$ 50.000</option>
                      <option value="cota-100k">Cota de R$ 100.000</option>
                      <option value="personalizado">Valor personalizado</option>
                    </select>

                    <button
                      type="submit"
                      className="w-full bg-white text-primary font-bold py-3 rounded-md border border-primary hover:bg-primary hover:text-white transition"
                    >
                      Enviar Solicitação
                    </button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-accent mr-2" />
              <span className="text-xl font-bold">
                CB Incorporação Imobiliária
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} CB Incorporação Imobiliária. Todos os
              direitos reservados.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                CNPJ
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
