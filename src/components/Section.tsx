interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <section>
      <h2 className="px-4 text-2xl font-bold uppercase">{title}</h2>
      <hr className="my-2 border-slate-300" />
      {children}
    </section>
  );
};

export default Section;
