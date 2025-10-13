interface VitaeSectionProps {
  children: React.ReactNode;
  title: string;
}

const VitaeSection = ({ children, title }: VitaeSectionProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold uppercase">{title}</h2>
      <hr className="my-2" />
      {children}
    </section>
  );
};

export default VitaeSection;
