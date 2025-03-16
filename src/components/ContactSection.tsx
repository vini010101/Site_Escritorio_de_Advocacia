import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      
      {/* Imagem no topo centralizada */}
      <div className="w-full flex justify-center mt-[-80px]">
    <img 
    src="/lovable-uploads/nc.png" 
    alt="Banner de Contato" 
    className="w-auto h-[450px] object-cover mx-auto"
    />
  </div>

  <div className="container mx-auto px-4 md:px-6 mt-[95px]">
    <div className="text-center mb-16">
      <p className="text-xl md:text-2xl font-display text-copper mb-6">
      17 de Janeiro de 2025 TRIBUTAÇÃO
      </p>
      <h3 className="text-xl md:text-2xl font-display text-olive mb-6 text-left ml-[465px]">
    Consectur Ipsum quia  
    <br />dolor sit amet
    </h3>
    <div className="flex flex-col items-center text-center">
  <p className="text-olive text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
    Nullam vehicula, odio ut aliquet cursus, lacus libero malesuada purus,  
    nec varius mauris odio ut erat.  
    <br /><br />
    Cras tincidunt, nisl nec vestibulum elementum,  
    ligula purus fermentum libero, et gravida sapien nisi et velit.
  </p>

  <div className="mt-6 flex gap-4">
  <button className="bg-olive text-white py-2 px-5 rounded-md text-sm transition duration-300 hover:bg-olive-dark">
    Continua Lendo
  </button>
  <button className="bg-copper text-white py-2 px-5 rounded-md text-sm transition duration-300 hover:bg-copper-dark">
    Ver mais Posts
  </button>
</div>

</div>
  </div>
  </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-olive mb-6">
            Precisa de uma consultoria jurídica?
          </h2>
          <a href="#contact" className="text-copper hover:text-copper-dark transition-colors duration-300 inline-block border-b border-copper pb-1">
            Entre em contato
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-sand p-8 mb-6">
              <div className="flex mb-4">
                <div className="w-16 h-16 bg-copper text-white flex items-center justify-center mr-4">
                  <span className="text-2xl font-display">N</span>
                </div>
                <div>
                  <p className="text-sm text-olive-light">E-MAIL</p>
                  <p className="text-olive font-medium">contato@najar-capdeville.com.br</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-16 h-16 bg-copper text-white flex items-center justify-center mr-4">
                  <span className="text-2xl font-display">C</span>
                </div>
                <div>
                  <p className="text-sm text-olive-light">TELEFONE</p>
                  <p className="text-olive font-medium">+55 99999-9999</p>
                  <p className="text-sm text-olive-light mt-2">ENDEREÇO</p>
                  <p className="text-olive">Rua Pedro Cerqueira, 132</p>
                  <p className="text-olive">São Paulo, SP 01000-000</p>
                  <p className="text-olive">CEP: 01000-00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="contact">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="NOME"
                  className="border border-olive/20 p-3 focus:outline-none focus:border-copper"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="border border-olive/20 p-3 focus:outline-none focus:border-copper"
                  required
                />
              </div>
              
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="TELEFONE"
                className="border border-olive/20 p-3 w-full mb-4 focus:outline-none focus:border-copper"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MENSAGEM"
                rows={4}
                className="border border-olive/20 p-3 w-full mb-6 focus:outline-none focus:border-copper"
                required
              ></textarea>
              
              <button 
                type="submit"
                className="bg-olive text-white py-2 px-8 uppercase tracking-wider text-sm hover:bg-olive-dark transition-colors duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 h-80 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976251405283!2d-46.65390548502168!3d-23.563054884681213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1574193383693!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            title="Location map"
            loading="lazy"
            className="rounded-sm"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
