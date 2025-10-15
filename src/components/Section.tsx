interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="flex-1">
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{title}</h2>
      <hr className="my-2 border-slate-300" />
      {children}
    </section>
  );
};

export default Section;
