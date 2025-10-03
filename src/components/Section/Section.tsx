import './Section.css';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="Section">
      <h2>{title}</h2>
      <hr />
      {children}
    </section>
  );
};

export default Section;
