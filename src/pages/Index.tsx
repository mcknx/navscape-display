import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life Got Better</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 mb-6">Home Health Care</h2>
          <p className="text-gray-600 mb-8">
            Experience compassionate, top-quality care tailored to your loved one's needs. 
            Trust us to provide a brighter, healthier future through personalized care and support.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Connect with Us
          </button>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold mb-4">Personal Care</h3>
              <p className="text-gray-600">Assistance with daily activities and personal hygiene</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold mb-4">Medical Support</h3>
              <p className="text-gray-600">Professional medical care and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600">
            With years of experience in home health care, our dedicated team of professionals
            is committed to providing the highest quality of care for your loved ones.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-blue-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Ready to learn more about our services? Get in touch with us today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;