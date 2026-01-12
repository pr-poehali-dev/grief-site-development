import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const { toast } = useToast();

  const navigation = [
    { name: 'О нас', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Цены', href: '#prices' },
    { name: 'Контакты', href: '#contacts' },
    { name: 'Полезная информация', href: '#info' }
  ];

  const services = [
    {
      icon: 'Heart',
      title: 'Организация похорон',
      description: 'Полный комплекс услуг: от оформления документов до проведения церемонии',
      price: 'от 45 000 ₽'
    },
    {
      icon: 'Flame',
      title: 'Кремация',
      description: 'Достойная альтернатива традиционным похоронам с соблюдением всех обрядов',
      price: 'от 35 000 ₽'
    },
    {
      icon: 'FileText',
      title: 'Оформление документов',
      description: 'Полное сопровождение: свидетельства, разрешения, справки',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Car',
      title: 'Транспортные услуги',
      description: 'Перевозка усопшего, траурный кортеж, доставка венков',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Flower',
      title: 'Ритуальные принадлежности',
      description: 'Гробы, венки, траурные ленты, одежда для усопшего',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Личный куратор',
      description: 'Персональный агент сопровождает на всех этапах организации',
      price: 'включено'
    }
  ];

  const benefits = [
    { icon: 'Clock', text: 'Работаем 24/7' },
    { icon: 'Shield', text: 'Лицензии и сертификаты' },
    { icon: 'Heart', text: 'Индивидуальный подход' },
    { icon: 'FileCheck', text: 'Документы под ключ' }
  ];

  const faqItems = [
    {
      question: 'Как вызвать агента?',
      answer: 'Позвоните по телефону +7 (495) 123-45-67 или заполните форму на сайте. Наш агент приедет в течение часа.'
    },
    {
      question: 'Какие документы нужны?',
      answer: 'Паспорт усопшего, медицинское свидетельство о смерти, паспорт заказчика. Наш агент поможет собрать все необходимые документы.'
    },
    {
      question: 'Есть ли рассрочка?',
      answer: 'Да, мы предоставляем рассрочку на 3-6 месяцев без процентов. Также действуют льготы для пенсионеров и ветеранов.'
    },
    {
      question: 'Как долго длится организация?',
      answer: 'Стандартный срок — 3-4 дня. При необходимости возможна срочная организация в течение 24 часов.'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Смирнова',
      text: 'Спасибо за чуткое отношение и профессионализм. В такой трудный момент вы взяли на себя все организационные вопросы.',
      rating: 5
    },
    {
      name: 'Михаил Петров',
      text: 'Всё прошло достойно и без суеты. Личный куратор помог с документами и был на связи 24/7. Рекомендую.',
      rating: 5
    },
    {
      name: 'Ольга Васильева',
      text: 'Организация на высшем уровне. Особая благодарность за деликатность и внимание к деталям.',
      rating: 5
    }
  ];

  const certificates = [
    { title: 'Лицензия Минздрава РФ', number: '№ ЛО-77-01-020945', icon: 'Award' },
    { title: 'Сертификат ISO 9001', number: '№ РОСС RU.31469.04ИЖО0', icon: 'BadgeCheck' },
    { title: 'Членство в СРО', number: '№ 1234567890', icon: 'ShieldCheck' },
    { title: 'Страхование ответственности', number: 'Полис № 12345/2024', icon: 'FileCheck' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка принята',
      description: 'Наш агент свяжется с вами в течение 15 минут',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Heart" className="text-primary" size={32} />
              <div>
                <h1 className="text-xl font-bold tracking-tight">Достойное прощание</h1>
                <p className="text-xs text-muted-foreground">Городское похоронное бюро</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+74951234567" className="flex items-center gap-2 text-primary font-semibold">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4 mt-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a href="tel:+74951234567" className="flex items-center gap-2 text-primary font-semibold">
                  <Icon name="Phone" size={20} />
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background via-card to-background">
          <div className="container mx-auto text-center max-w-4xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-sm">
              Достойное прощание<br />с уважением к памяти
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная организация похорон и ритуальных услуг.<br />
              Берём на себя все заботы в трудный момент.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg gap-2" asChild>
                <a href="#contacts">
                  <Icon name="Phone" size={20} />
                  Вызвать агента
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#services">Все услуги</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center gap-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Icon name={benefit.icon} className="text-primary" size={32} />
                  <span className="text-sm text-center">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">О нашем бюро</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Уже более 15 лет мы помогаем семьям в самые трудные моменты. Наша миссия — обеспечить достойное прощание с близкими, взяв на себя все организационные заботы.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Мы работаем с уважением к традициям всех конфессий, обеспечиваем полную юридическую поддержку и гарантируем конфиденциальность.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3 bg-background/50 px-4 py-3 rounded-lg">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span className="font-semibold">Лицензия Минздрава</span>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 px-4 py-3 rounded-lg">
                    <Icon name="Users" className="text-primary" size={24} />
                    <span className="font-semibold">5000+ семей</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8 h-80 flex items-center justify-center">
                <Icon name="Heart" className="text-primary/20" size={120} />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Наши услуги</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Полный комплекс ритуальных услуг с индивидуальным подходом к каждой семье
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="#contacts">Заказать</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Цены и пакеты</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Базовый', price: '45 000 ₽', features: ['Гроб стандарт', 'Транспорт', 'Документы', 'Похороны'] },
                { name: 'Премиум', price: '85 000 ₽', features: ['Гроб премиум', 'Транспорт VIP', 'Документы', 'Похороны', 'Поминки', 'Куратор 24/7'], highlight: true },
                { name: 'Кремация', price: '35 000 ₽', features: ['Кремация', 'Транспорт', 'Документы', 'Урна'] }
              ].map((pack, index) => (
                <Card key={index} className={`${pack.highlight ? 'border-primary shadow-lg scale-105' : ''} transition-transform hover:scale-105 duration-300`}>
                  <CardContent className="p-8 text-center">
                    {pack.highlight && (
                      <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Популярный
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                    <p className="text-4xl font-bold text-primary mb-6">{pack.price}</p>
                    <ul className="space-y-3 mb-8">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 justify-center text-muted-foreground">
                          <Icon name="Check" className="text-primary" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pack.highlight ? 'default' : 'outline'} asChild>
                      <a href="#contacts">Выбрать пакет</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-12">
              <Icon name="Info" className="inline mr-2" size={18} />
              Доступна рассрочка на 3-6 месяцев без процентов. Льготы для пенсионеров и ветеранов.
            </p>
          </div>
        </section>

        <section id="certificates" className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Лицензии и сертификаты</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Наша деятельность полностью лицензирована и соответствует всем стандартам качества
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                      <Icon name={cert.icon} className="text-primary" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.number}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Отзывы клиентов</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Нам доверяют в самые трудные моменты
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="User" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="text-primary fill-primary" size={14} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="info" className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Полезная информация</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contacts" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="mb-12 rounded-lg overflow-hidden border border-border h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4449607873587!2d37.61773261593086!3d55.75582998055598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта офиса"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    Адрес
                  </h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-sm text-muted-foreground mt-2">Ежедневно, круглосуточно</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Телефоны
                  </h3>
                  <div className="space-y-2">
                    <a href="tel:+74951234567" className="block text-lg hover:text-primary transition-colors">
                      +7 (495) 123-45-67 — срочный вызов
                    </a>
                    <a href="tel:+74951234568" className="block text-muted-foreground hover:text-primary transition-colors">
                      +7 (495) 123-45-68 — общий
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" size={24} />
                    Email
                  </h3>
                  <a href="mailto:info@funeral.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@funeral.ru
                  </a>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Вызвать агента</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email (необязательно)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Сообщение (необязательно)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <span className="font-bold">Достойное прощание</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Городское похоронное бюро
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>г. Москва, ул. Примерная, 123</li>
                <li>
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@funeral.ru" className="hover:text-primary transition-colors">
                    info@funeral.ru
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Договор оферты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Лицензии
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Достойное прощание. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:+74951234567"
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 z-50 flex items-center gap-2 animate-scale-in"
      >
        <Icon name="Phone" size={24} />
        <span className="hidden sm:inline font-semibold">Срочный вызов</span>
      </a>
    </div>
  );
};

export default Index;